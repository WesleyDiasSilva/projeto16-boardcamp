import { repositoryListCategories } from "../../repositories/categories/listCategories.js";

export async function serviceListCategories(){
  try{
    const listCategories = await repositoryListCategories();
      return {status: true, message: listCategories.message}
  }catch{
      return {status: false, message: null}
  }
}