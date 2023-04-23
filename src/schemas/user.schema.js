import joi from "joi";

export const userSchema = joi.object({
    email: joi.string().email().trim().required(),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).min(3).trim().required()
});