import { connection } from "../../database/connection.js";

export async function findGameById(id) {
  try {
    const { rows } = await connection.query(
      "SELECT * FROM games WHERE id = $1",
      [id]
    );
    return { status: true, message: rows };
  } catch {
    return { status: false, message: null };
  }
}
