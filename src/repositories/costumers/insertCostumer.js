import { connection } from "../../database/connection.js";

export async function createCostumer(costumer) {
  try {
    const { name, phone, cpf, birthday } = costumer;
    await connection.query(
      `
      INSERT INTO customers (name, phone, cpf, birthday) VALUES ($1, $2, $3, $4)
    `,
      [name, phone, cpf, birthday]
    );
    return { status: true, message: null };
  } catch (err) {
    return { status: false, message: err };
  }
}
