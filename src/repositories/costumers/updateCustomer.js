import { connection } from "../../database/connection.js";

export async function updateCustomer(customer) {
  const { name, phone, cpf, birthday, id } = customer;
  try {
    await connection.query(
      `
      UPDATE customers SET name=$1, phone=$2, cpf=$3, birthday=$4 WHERE id=$5
    `,
      [name, phone, cpf, birthday, id]
    );
    return {status: true, message: null}
  } catch (err) {
    console.log(err)
    return { status: false, message: err };
  }
}
