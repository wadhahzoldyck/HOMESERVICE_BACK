const Joi = require('joi')
const passwordComplexity = require('joi-password-complexity');

//Register Validation 

const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(2).required(),
        lastName: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        phone: Joi.string().max(15).required(),
        password: passwordComplexity().required(),
        cpassword: Joi.ref('password'),
    });
    return schema.validate(data);
};

const loginValidation = (data) => {
    const schema = Joi.object({

        email: Joi.string().min(6).required().email().label("Email"),
        password: passwordComplexity().required().label("password"),

    });
    return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;