import { serviceGetRentals } from "../../services/rentals/serviceGetRentals.js";

export async function getRentals(req, res) {
  try {
    const { customerId, gameId } = req.query;
    const rentals = await serviceGetRentals(customerId, gameId);
    if (rentals.status) {
      return res.status(200).send(rentals.message);
    }
    return res.sendStatus(400);
  } catch {
    res.sendStatus(500);
  }
}
