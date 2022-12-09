import { findCustomerById } from "../../repositories/costumers/findCustomerById.js";
import { getCostumers } from "../../repositories/costumers/getCostumers.js";

export async function serviceGetCostumers(id = null) {
  try {
    if (id) {
      const customer = await findCustomerById(id);
      return { status: true, message: customer.message };
    }
    const costumers = await getCostumers();
    if (costumers.message.length) {
      const birthdayClean = costumers.message[0].birthday
      console.log(birthdayClean);
      return { status: true, message: costumers.message };
    }
    return { status: false, message: "Costumers not found!" };
  } catch (err) {
    console.log(err);
    return { status: false, message: err };
  }
}
