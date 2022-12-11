import { connection } from "../../database/connection.js";

export async function getCostumers() {
  try {
    const costumers = await connection.query(`
      SELECT * FROM customers
    `);
    return { status: true, message: costumers.rows };
  } catch {
    return { status: false, message: null };
  }
}
