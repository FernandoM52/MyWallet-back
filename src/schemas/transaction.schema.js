import joi from "joi";

export const transactionSchema = joi.object({
    value: joi.number().positive().precision(2).strict().required(),
    description: joi.string().required()
});