import { serviceDeleteRental } from "../../services/rentals/serviceDeleteRental.js";

export async function deleteRental(req, res) {
  try {
    const { id } = req.params;
    const response = await serviceDeleteRental(id);
    if (response.status) {
      return res.sendStatus(200);
    }
    res.sendStatus(400);
  } catch (err) {
    res.status(500).send(err);
  }
}
