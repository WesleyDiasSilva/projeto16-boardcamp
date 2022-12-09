import { serviceGetGames } from "../../services/games/serviceGetGames.js";

export async function listGames(req, res) {
  const { name } = req.query;
  try {
    const games = await serviceGetGames(name);
    if (games.status) {
      return res.status(200).send(games.message.rows);
    }
    return res.sendStatus(400);
  } catch {
    return res.sendStatus(500);
  }
}
