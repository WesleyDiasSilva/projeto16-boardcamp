import { connection } from "../../database/connection.js";

export async function listRentalsByIdGame(id) {
  try {
    const rentals = await connection.query(
      `
    SELECT * FROM rentals WHERE "gameId"=$1
    `,
      [id]
    );
    return { status: true, message: rentals.rows };
  } catch (err) {
    return { status: false, message: err };
  }
}
