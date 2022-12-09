import { schemaNewGame } from "../models/gameModel.js";

export function middlewareInsertGame(req, res, next) {
  const { name, image, stockTotal, categoryId, pricePerDay } = req.body;
  const valdation = schemaNewGame.validate(
    {
      name,
      image,
      stockTotal,
      categoryId,
      pricePerDay,
    },
    { abortEarly: false }
  );
  if (valdation.error) {
    return res.status(400).send(valdation.error);
  }
  req.locals = { name, image, stockTotal, categoryId, pricePerDay };
  next();
}
