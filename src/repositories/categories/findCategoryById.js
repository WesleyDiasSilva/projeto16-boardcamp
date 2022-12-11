import { connection } from "../../database/connection.js";

export async function repositoryFindCategoryById(id) {
  try {
    const category = await connection.query(
      "SELECT * FROM categories WHERE id=$1",
      [id]
    );
    return { status: true, message: category };
  } catch {
    return { status: false, message: null };
  }
}
