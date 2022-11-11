const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    owner: {
        type: String,
        required: false,
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
    leadSource: {
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
        type: Date,
        required: false,
    },
    asstPhone: {
        type: String,
        required: false,
    },
    addressInfo: {
        mailing: {
            street: {
                type: String,
                required: false,
            },
            city: {
                type: String,
                required: false,
            },
            state: {
                type: String,
                required: false,
            },
            country: {
                type: String,
                required: false,
            },
            zip: {
                type: String,
                required: false,
            },
        },
        other: {
            street: {
                type: String,
                required: false,
            },
            city: {
                type: String,
                required: false,
            },
            state: {
                type: String,
                required: false,
            },
            country: {
                type: String,
                required: false,
            },
            zip: {
                type: String,
                required: false,
            }
        }
    },
    image: {
        type: String,
        required: false,
    }
}); 

module.exports = mongoose.model("Contact", contactSchema);