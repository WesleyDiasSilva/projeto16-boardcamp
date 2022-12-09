import { connection } from "../../database/connection.js";

export async function repositoryFindCategoryByName(name) {
  try {
    const category = await connection.query(
      "SELECT * FROM categories WHERE name=$1",
      [name]
    );
    return {status: true, message: category}
  } catch {
    return { status: false, message: null };
  }
}
