import { connection } from "../../database/connection.js";

export async function findCustomerByCpf(cpf) {
  try {
    const customer = await connection.query(
      `
      SELECT * FROM customers WHERE cpf=$1
    `,
      [cpf]
    );
    return { status: true, message: customer };
  } catch (err) {
    return { status: false, message: err };
  }
}
