import { findCustomerByCpf } from "../../repositories/costumers/findCustomerByCpf.js";
import { createCostumer } from "../../repositories/costumers/insertCostumer.js"

export async function serviceInsertCostumer(costumer){
  try{
    const customerExists = await findCustomerByCpf(costumer.cpf)
    if(customerExists.message.rows.length){
      return {status: false, message: "Customer already registered!"}
    }
    const responseInsert = await createCostumer(costumer);
    console.log(responseInsert)
    if(responseInsert.status){
      return {status: true, message: null}
    }
    return {status: false, message: "Try again later"}
  }catch(err){
    return {status: false, message: err}
  }
}