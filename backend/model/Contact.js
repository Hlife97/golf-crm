const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    owner: {
        type: String,
        required: true,
        // trim:true
    },
    fname: {
        type: String,
        required: true,
    },
    lname:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    otherPhone: {
        type: String,
        required: false,
    },
    mobile:{
        type: String,
        required: false,
    },
    assistant: {
        type: String,
        required: false,
    },
    vendorName:{
        type: String,
        required: false,
    },
    title: {
        type: String,
        required: false,
    },
    department: {
        type: String,
        required: false,
    },
    homePhone: {
        type: String,
        required: false,
    },
    fax: {
        type: String,
        required: false,
    },
    dateOfBirth: {
        type: String,
        required: false,
    },
    asstPhone: {
        type: String,
        required: false,
    }
}); 

module.exports = mongoose.model("Contact", contactSchema);