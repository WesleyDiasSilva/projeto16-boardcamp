import { serviceFinishRental } from "../../services/rentals/serviceFinishRental.js";

export async function finishRental(req, res) {
  try {
    const { id } = req.params;
    const response = await serviceFinishRental(id);
    if (response.status) {
      return res.sendStatus(200);
    }
    res.sendStatus(400);
  } catch {
    res.sendStatus(500);
  }
}
