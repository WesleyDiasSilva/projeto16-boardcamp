import { getGames } from "../../repositories/games/listGames.js";

export async function serviceGetGames(name = null) {
  try {
    const response = await getGames(name);
    if (response.status) {
      return { status: true, message: response.message };
    }
    return { status: false, message: null };
  } catch {
    return { status: true, message: null };
  }
}
