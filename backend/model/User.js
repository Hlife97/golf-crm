const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWTPRIVATEKEY, {expiresIn: "7d"})
    return token;
}

const User = mongoose.model("user", userSchema);

const validate = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label("Email Address"),
        password: passwordComplexity().min(8).required().label("Password"),
    });
    return schema.validate(data);
}

module.exports = {User, validate}