import { connection } from "../../database/connection.js";

export async function listRentals() {
  try {
    const rentals = await connection.query(
      `
    SELECT * FROM rentals
    `
    );
    return { status: true, message: rentals.rows };
  } catch (err) {
    return { status: false, message: err };
  }
}
