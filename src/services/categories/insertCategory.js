import { repositoryInsertCategory } from "../../repositories/categories/insertCategory.js";

export async function serviceInsertCategory(name) {
  try {
    const result = await repositoryInsertCategory(name);
    if (result.status) {
      return { status: true, message: result.message.rowCount };
    }
    return { status: false, message: null };
  } catch {
    return { status: false, message: null };
  }
}
