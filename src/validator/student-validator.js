const Joi = require("joi");

module.exports = {
    post
}

function post(req) {
    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required()
    });
    return schema.validate(req);
}
