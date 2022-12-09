import { schemaNewCategory } from "../models/categoryModel.js";

export async function middlewareInsertCategory(req, res, next) {
  const { name } = req.body;
  const validation = schemaNewCategory.validate({ name });
  if (validation.error) {
    return res.status(400).send(validation.error);
  }
  next();
}
