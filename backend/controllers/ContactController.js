const Contact = require('../model/Contact')

// ? Get All Contacts
const index = async (req, res, next) => {
    let contacts;

    try{
        contacts = await Contact.find();
    }catch(err){
        return res.status(500).json({
            status: 500,
            message: 'Server error'
        })
    }

    if (!contacts) {
        return res.status(404).json({
            status: 404,
            message: 'Contacts not found!'
        })
    }

    return res.status(200).json({contacts})
}

// ? Create New Contact
const store = async (req, res, next) => {

    const {owner, fname, lname, email, phone, } = req.body;
    let contact;

    try{
        contact = new Contact({
            owner,
            fname,
            lname,
            email,
            phone
        });
        await contact.save();
    }catch(err){
        return res.status(500).json({
            status: 500,
            message: 'Server error'
        })
    }

    if(!contact){
        return res.status(500).json({
            status: 500,
            message: 'Contact can not added.'
        })
    }

    return res.status(201).json({contact})
}

exports.index = index;
exports.store = store;