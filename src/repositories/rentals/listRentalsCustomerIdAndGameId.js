import { connection } from "../../database/connection.js";

export async function listRentalsCustomerAndGame(gameId, customerId) {
  try {
    const rentals = await connection.query(
      `
    SELECT * FROM rentals WHERE "gameId"=$1 AND WHERE "customerId"=$2
    `,
      [gameId, customerId]
    );
    return { status: true, message: rentals.rows };
  } catch (err) {
    return { status: false, message: err };
  }
}
