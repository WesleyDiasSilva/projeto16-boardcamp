import { serviceInsertGame } from "../../services/games/serviceInsertGame.js";

export async function insertGame(req, res) {
  try {
    const game = req.locals;
    const result = await serviceInsertGame(game);
    if (result.status) {
      return res.status(201).send(result.message);
    }
    return res.status(409).send(result.message);
  } catch {
    return res.sendStatus(500);
  }
}
