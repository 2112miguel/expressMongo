const mongoose = require('mongoose')
const { model } = require('./products')

const Schema =mongoose.Schema
const schema = new Schema({
    firstName: {type: String, required: true} ,
    lastName: {type: String, required: true},
    email : {type: String, required: true, unique: true, index: true},
    pswd: {type: String, required: true},
    role: {type: String, required:false,default: "client"}
})

module.exports={
    schema,
    model: mongoose.model("Users",schema)
}