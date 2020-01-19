const mongoose = require('mongoose')
var cartschema = new mongoose.Schema({
    productid: String,
    userid: String,
    qty: String,
    price:String
}, {collection : 'cart'});
var cart = mongoose.model("cart", cartschema);

module.exports = cart