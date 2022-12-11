import { connection } from "../../database/connection.js";

export async function listRentalById(id) {
  try {
    const rental = await connection.query(
      `
    SELECT * FROM rentals WHERE "id"=$1
    `,
      [id]
    );
    return { status: true, message: rental.rows[0] };
  } catch (err) {
    return { status: false, message: err };
  }
}
