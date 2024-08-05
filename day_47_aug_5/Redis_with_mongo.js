import { createClient } from 'redis';
import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
app.use(express.json());

const url = 'mongodb://localhost:27017';
// const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
let empCollection;

async function connectToDB() {
    await client.connect();
    console.log('Connected successfully to Database');
    empCollection = client.db('june_2024').collection('employees');
}

const redisClient = await createClient()
    .on('error', err => console.log('Redis Client Error', err))
    .connect();

app.get('/employees/:id', async (req, res) => {
    let empId = req.params.id;
    let dataInRedis = await redisClient.get(empId);

    if (dataInRedis) {
        console.log('Data Found in Redis');
        let employee = JSON.parse(dataInRedis);
        res.send({ source: 'Redis', employee });
    } else {
        console.log('Data Not Found in Redis');
        let employee = await empCollection.findOne({ eId: +empId });
        await redisClient.set(empId, JSON.stringify(employee), { EX: 120 });
        console.log('data stired in Redis');
        res.send({ source: 'mongoDB', employee });
    }
})

app.listen(5000, () => {
    connectToDB();
    console.log('server runnign at 5000 port');
})

