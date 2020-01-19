const mongoose = require('mongoose')
var prosuctschema = new mongoose.Schema({
    name: String,
    price: String,
    category: String,
    stock:Number,
    img1:String,
    img2:String,
    img3:String,
    description:String
}, {collection : 'product'});
var product = mongoose.model("prosuct", prosuctschema);

module.exports = product