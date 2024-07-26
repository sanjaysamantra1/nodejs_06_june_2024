const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const app = express();
app.use(express.json());
app.use(cors());

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
let empCollection;

async function connectToDB() {
    await client.connect();
    console.log('Connected successfully to Database');
    empCollection = client.db('june_2024').collection('employees');
}
app.get('/employees', async (req, res) => {
    let employees = await empCollection.find({}).toArray();
    res.json(employees);
})
app.get('/employees/:id', async (req, res) => {
    let empId = +req.params.id;
    let employee = await empCollection.findOne({ eId: empId });
    res.json(employee);
})
app.post('/employees', async (req, res) => {
    let newEmployee = req.body;
    await empCollection.insertOne(newEmployee);
    res.send("Employee Added Succesfully");
})
app.patch('/employees/:id', async (req, res) => {
    let eId = +req.params.id;
    let payload = req.body;
    await empCollection.updateOne({ eId }, { $set: payload });
    res.send("Employee Updated Succesfully");
})
app.delete('/employees/:id', async (req, res) => {
    let eId = +req.params.id;
    await empCollection.deleteOne({ eId });
    res.send("Employee Deleted Succesfully");
})

app.listen(5000, () => {
    connectToDB();
    console.log('server runnign at 5000 port');
})

