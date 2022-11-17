const {User, validate} = require('../model/User')
const bcrypt = require('bcrypt');

const register = async (req, res, next) =>{
    
    
    try{
        const {error} = validate(req.body);
        if(error){
            return res.status(400).json({
                status: 'error',
                message: error.details[0].message
            })
        }
        const user = await User.findOne({email: req.body.email});
        if(user){
            return res.status(409).json({
                status: 'error',
                message: 'Email already exists'
            })
        }
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        await new User({...req.body, password: hashPassword}).save();

        return res.status(201).json({
            status:'success',
            message: 'User created succesfully!'
        })
    }catch(error){
        return res.status(500).json({
            status: 'success',
            message: error.details[0].message
        })
    }
}

exports.register = register;