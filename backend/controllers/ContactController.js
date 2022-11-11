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

    const contact = new Contact(req.body);

    try{
        await contact.save();
    }catch(err){
        return res.status(400).json({
            status: 400,
            message: err
        })
    }

    if(!contact){
        return res.status(500).json({
            status: 500,
            message: 'Unable to save to database'
        })
    }

    return res.status(201).json({contact})
}

// ? Show Contact
const show = async (req, res, next) => {
    const contact = await Contact.findById(req.params.id);

    if(!contact){
        return res.status(404).json({
            status: 404,
            message: 'Contact not found!'
        });
    }

    return res.status(200).json({contact})
}

//? Update Contact
const update = async (req, res, next) => {
    let contact;

    try{
        contact = await Contact.findByIdAndUpdate(req.params.id, req.body);
    }catch(err){
        return res.status(400).json({
            status: 400,
            message: err
        })
    }

    if(!contact){
        return res.status(404).json({
            status: 404,
            message: 'Contact not found!'
        })
    }
    return res.status(200).json({contact})
}

//? Delete Contact

const remove = async (req, res, next) => {
    try{
        await Contact.findByIdAndRemove(req.params.id);
    }catch(err){
        return res.status(400).json({
            status: 400,
        })
    }

    return res.status(200).json({
        status: 200,
        message: 'Contact removed successfully!'
    })
}

exports.index = index;
exports.store = store;
exports.show = show;
exports.update = update;
exports.remove = remove;
