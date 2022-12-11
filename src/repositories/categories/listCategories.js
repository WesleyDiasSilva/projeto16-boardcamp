import { connection } from "../../database/connection.js";

export async function repositoryListCategories() {
  try {
    const categories = await connection.query("SELECT * FROM categories");
    return { status: true, message: categories };
  } catch {
    return { status: false, message: null };
  }
}
