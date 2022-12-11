import { connection } from "../../database/connection.js";

export async function deleteRentalRepository(id) {
  try {
    await connection.query(
      `
      DELETE FROM rentals WHERE id=$1
    `,
      [id]
    );
    return { status: true, message: null };
  } catch (err) {
    return { status: false, message: err };
  }
}
