const mongoose = require('mongoose')
const { model } = require('./products')

const Schema =mongoose.Schema
const schema = new Schema({
    name:String,
    pswd: String,
    img: String
})

module.exports={
    schema,
    model: mongoose.model("User",schema)
}