import { updateCustomer } from "../../repositories/costumers/updateCustomer.js";

export async function serviceUpdateCustomer(customer) {
  try {
    const response = await updateCustomer(customer);
    if (response.status) {
      return { status: true, message: null };
    }
    return { status: false, message: null };
  } catch (err) {
    return { status: false, message: err };
  }
}
