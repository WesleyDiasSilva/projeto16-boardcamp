import { schemaNewCostumer } from "../models/costumerModel.js";

export function middlewareInsertCostumer(req, res, next) {
  const { name, phone, cpf, birthday } = req.body;

  const validation = schemaNewCostumer.validate({ name, phone, cpf, birthday });
  if (validation.error) {
    return res.status(400).send(validation.error);
  }

  const phoneNumber = Number(phone);
  const cpfNumber = Number(cpf);

  if (isNaN(phoneNumber) || isNaN(cpfNumber)) {
    return res.status(400).send("cpf and/or phone, need be only number!");
  }

  req.locals = { name, phone, cpf, birthday };
  next();
}
