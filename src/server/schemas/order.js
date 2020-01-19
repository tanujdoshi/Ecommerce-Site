const mongoose = require('mongoose')
var orderschema = new mongoose.Schema({
    productid: String,
    userid: String,
    qty: String,
    price:String
})
var order = mongoose.model("order", orderschema);

module.exports = order