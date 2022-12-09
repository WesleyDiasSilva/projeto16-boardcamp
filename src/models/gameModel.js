import Joi from "joi";

export const schemaNewGame = Joi.object({
  name: Joi.string().min(3).required(),
  image: Joi.string().required(),
  stockTotal: Joi.number().positive().required(),
  categoryId: Joi.number().required(),
  pricePerDay: Joi.number().positive().required(),
});
