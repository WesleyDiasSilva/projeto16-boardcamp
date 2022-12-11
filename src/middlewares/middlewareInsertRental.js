import { serviceCheckInsertRental } from "../services/rentals/serviceCheckInsertRental.js";

export async function middlewareInsertRental(req, res, next) {
  try {
    const { customerId, gameId, daysRented } = req.locals;

    const canInsert = await serviceCheckInsertRental(
      customerId,
      gameId,
      daysRented
    );
    if (!canInsert.status) {
      return res.status(400).send(canInsert.message);
    }
    const customer = canInsert.message.customerFound.message[0];
    const game = canInsert.message.gameFound.message[0];
    req.locals = { customer, game, daysRented };
    next();
  } catch (err) {
    return res.status(400).send(err);
  }
}
