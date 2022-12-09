import { serviceUpdateCustomer } from "../../services/costumers/serviceUpdateCustomer.js";

export async function updateCustomer(req, res) {
  try {
    const customer = req.locals;
    const idCustomer = req.params.id;
    customer.id = idCustomer
    console.log(customer)
    const response = await serviceUpdateCustomer(customer);
    if (response.status) {
      return res.status(200).send("Customer updated!");
    }
    return res.sendStatus(400);
  } catch (err) {
    return res.status(500).send(err);
  }
}
