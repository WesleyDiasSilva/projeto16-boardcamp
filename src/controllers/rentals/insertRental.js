import { serviceInsertRental } from "../../services/rentals/serviceInsertRental.js";

export async function insertRental(req, res) {
  try {
    const response = await serviceInsertRental(req.locals);
    if (response.status) {
      return res.status(201).send(response.message);
    }
    return res.sendStatus(400);
  } catch (err) {
    return res.status(500).send(err);
  }
}
