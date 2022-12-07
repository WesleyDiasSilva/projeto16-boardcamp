import Joi from "joi";

export const schemaNewCategory = Joi.object({
  name: Joi.string().min(3).required(),
});
