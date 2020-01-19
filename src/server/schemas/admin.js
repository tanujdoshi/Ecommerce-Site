const mongoose = require('mongoose')
var adminschema = new mongoose.Schema({
    email: String,
    password: String,
});
var admin = mongoose.model("admin", adminschema);

module.exports = admin