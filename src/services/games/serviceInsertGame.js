import { repositoryFindCategoryById } from "../../repositories/categories/findCategoryById.js";
import { createGame } from "../../repositories/games/createGame.js";
import { findGameByName } from "../../repositories/games/findGameByName.js";

export async function serviceInsertGame(game) {
  try {
    const nameGameExists = await findGameByName(game.name);
    if (nameGameExists.message.length) {
      return { status: false, message: "Game already registered!" };
    }
    const categoryExists = await repositoryFindCategoryById(game.categoryId);
    if (categoryExists.message.rowCount > 0) {
      const response = await createGame(game);
      if (response.status) {
        return { status: true, message: response.message };
      }
    } else {
      return { status: false, message: "Category not found!" };
    }
    return { status: false, message: null };
  } catch {
    return { status: false, message: null };
  }
}
