import joi from "joi";

export const signupSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().trim().required(),
    password: joi.string().min(3).trim().required()
});

export const loginSchema = joi.object({
    email: joi.string().email().trim().required(),
    password: joi.string().min(3).trim().required()
});