import { repositoryInsertCategory } from "../../repositories/categories/insertCategory.js";
import { repositoryFindCategoryByName } from "../../repositories/categories/findCategoryByName.js";


export async function serviceInsertCategory(name) {
  try {
    const categoryExists = await repositoryFindCategoryByName(name);
    if(categoryExists.message.rowCount > 0){
      return {status: false, message: "Category already registered"}
    }
    const result = await repositoryInsertCategory(name);
    if (result.status) {
      return { status: true, message: result.message.rowCount };
    }
    return { status: false, message: null };
  } catch {
    return { status: false, message: null };
  }
}
