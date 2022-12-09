import { connection } from "../../database/connection.js";

export async function findGameByName(name) {
  try {
    const { rows } = await connection.query(
      "SELECT * FROM games WHERE name = $1",
      [name]
    );
    return { status: true, message: rows };
  } catch {
    return { status: false, message: null };
  }
}
