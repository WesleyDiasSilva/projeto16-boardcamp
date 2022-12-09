import { serviceInsertCostumer } from "../../services/costumers/serviceInsertCostumer.js";

export async function insertCostumer(req, res) {
  const costumer = req.locals;
  try {
    const response = await serviceInsertCostumer(costumer);
    if(response.status){
      return res.status(201).send("Costumer created!")
    }
    return res.status(400).send(response.message)
  } catch (err){
    console.log(err)
    return res.sendStatus(500);
  }
}
