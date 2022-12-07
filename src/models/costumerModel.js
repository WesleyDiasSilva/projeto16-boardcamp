import Joi from "joi";

export const schemaNewCostumer = Joi.object({
  name: Joi.string().min(3).required(),
  phone: Joi.string().min(8).required(),
  cpf: Joi.string().min(10).required(),
  birthday: Joi.string().min(10).max(10).required(),
});
