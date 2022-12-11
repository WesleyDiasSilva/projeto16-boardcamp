import { schemaNewRental } from "../models/rentalUserModel.js";

export function middlewareRentalUser(req, res, next) {
  const { customerId, gameId, daysRented } = req.body;

  const validation = schemaNewRental.validate(
    {
      customerId,
      gameId,
      daysRented,
    },
    { abortEarly: false }
  );
  if (validation.error) {
    return res.status(400).send(validation.error);
  }
  req.locals = { customerId, gameId, daysRented };
  next();
}
