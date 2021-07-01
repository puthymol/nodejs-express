const Joi = require("joi");

function validate(req) {
    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required()
    });
    return schema.validate(req);
}

module.exports = {
    validate
}
