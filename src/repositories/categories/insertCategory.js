import { connection } from "../../database/connection.js";

export async function repositoryInsertCategory(name) {
  try {
    const result = await connection.query(
      "INSERT INTO categories (name) VALUES ($1)",
      [name]
    );
    return {status: true, message: result}
  } catch(err) {
    return { status: false, message: null };
  }
}
