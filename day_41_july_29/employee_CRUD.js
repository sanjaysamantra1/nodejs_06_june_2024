const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const employeeModel = require('./employee_model');
app.use(express.json());
app.use(cors());


const url = 'mongodb://localhost:27017/june_2024';
mongoose.connect(url);

app.get('/employees', async (req, res) => {
    let employees = await employeeModel.find({});
    res.json(employees);
})
app.get('/employees/:id', async (req, res) => {
    let eId = +req.params.id;
    let employee = await employeeModel.findOne({ eId });
    res.json(employee);
})
app.post('/employees', async (req, res) => {
    try {
        let newEmp = new employeeModel(req.body);
        await newEmp.save();
        res.send("Employee Added Succesfully");
    } catch (err) {
        console.log(err);
        res.send(err);
    }
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
    console.log('server runnign at 5000 port');
})

