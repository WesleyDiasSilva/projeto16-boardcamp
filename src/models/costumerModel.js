import Joi from "joi";

export const schemaNewCostumer = Joi.object({
  name: Joi.string().min(3).required(),
  phone: Joi.string().min(10).max(11).required(),
  cpf: Joi.string().min(11).required(),
  birthday: Joi.date().greater("1-1-1900").required(),
});
