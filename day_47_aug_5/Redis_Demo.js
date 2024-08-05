import { createClient } from 'redis';
import axios from 'axios';
import express from 'express';
const app = express();

const redisClient = await createClient()
    .on('error', err => console.log('Redis Client Error', err))
    .connect();

app.get('/fetchData', async (req, res) => {
    console.log('Inside the route')
    let countryName = req?.query?.country || 'india';
    const url = `https://en.wikipedia.org/w/api.php?action=parse&format=json&section=0&page=${countryName}`

    // check if data is there in REDIS
    const dataInRedis = await redisClient.get(countryName);

    if (dataInRedis) { // return the data from Redis
        console.log('Data Found in Redis');
        let output = JSON.parse(dataInRedis);
        res.send({ source: 'Redis', output });
    } else { // 1. fetch the data using axios, 2. store in redis, return the data
        console.log('Data Not Found in Redis');
        let response = await axios.get(url);
        let output = response.data;

        await redisClient.set(countryName, JSON.stringify(output), { EX: 120 });
        console.log('data stired in Redis');

        res.send({ source: 'API', output });
    }
});

app.listen(5000);

// http://localhost:5000/fetchData?country=india