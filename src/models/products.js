const mongoose = require("mongoose")

const Schema= mongoose.Schema
const schema = new Schema({
    name: {type: String, required:true, unique: true},//{type: String, required:true},
    description: {type: String, required: true }, //{type: String, required:true},
    price: {type: Number, required: true},//{type: Number, required: true},
    img: {type: String, required: true},//{type: String, required:true},
    categories: [
        {
            type: Schema.Types.ObjectId,
            ref: "Categories"
        }
    ]
})

module.exports={
    schema,
    model: mongoose.model("Products",schema)
}