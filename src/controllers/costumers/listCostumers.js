import { serviceGetCostumers } from "../../services/costumers/serviceGetCostumers.js";

export async function listCostumers(req, res) {
  const {id} = req.params;
  try {
    const costumers = await serviceGetCostumers(id);
    if (costumers.status) {
      return res.status(200).send(costumers.message);
    }
    return res.status(409).send(costumers.message);
  } catch {
    res.sendStatus(500);
  }
}
