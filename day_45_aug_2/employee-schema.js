const { gql } = require('apollo-server-express');
const employeeModel = require('./employee-model');
const mongoose = require('mongoose');

const db_url = 'mongodb://localhost:27017/june_2024'
const connect = async () => {
    await mongoose.connect(db_url);
}

let typeDefs = gql`
    type Employee{
        eId:Int
        name:String
        sal:Int
        gender:String
    }
    type Query{
        getEmployees:[Employee]
        getEmployee(id:Int):Employee
    }
    type Mutation{
        addEmployee(eId:Int,name:String,sal:Int,gender:String):String
        deleteEmployee(id:Int):Boolean
        updateEmployee(id:Int):Boolean
    }
`

let resolvers = {
    Query: {
        getEmployees: async function () {
            await connect();
            let result = await employeeModel.find({});
            return result;
        },
        getEmployee: async function (parent, args) {
            await connect();
            let result = await employeeModel.find({ eId: args.id });
            return result[0];
        }
    },
    Mutation: {
        addEmployee: async function (parent, args) {
            await connect();
            const { eId, name, sal, gender } = args;
            let newEmp = new employeeModel({ eId, name, sal, gender });
            await newEmp.save();
            return 'Employee Added Successfully!!';
        },
        deleteEmployee: async function (parent, args) {
            await connect();
            await employeeModel.findOneAndDelete({ eId: args.id })
            return true;
        },
        updateEmployee: async function (parent, args) {
            await connect();
            return true;
        }
    }
}
module.exports = { typeDefs, resolvers };