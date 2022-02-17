

const mongoose = require('mongoose')

const leadSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    age: Number,
    address1: String,
    address2: String,
    city: String,
    state: String,
    country: String,
    mobile_number: Number,
    email: String,
    company_name: String,

});


module.exports = mongoose.model('leads', leadSchema)
