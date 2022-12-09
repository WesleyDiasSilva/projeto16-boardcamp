import { connection } from "../../database/connection.js"

export async function findCustomerById(id){
  try{
    const customer = await connection.query(`
      SELECT * FROM customers WHERE id=$1
    `, [id])
    return {status: true, message: customer.rows}
  }catch(err){
    return {status: false, message: err}
  }
}