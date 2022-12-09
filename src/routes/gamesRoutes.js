import { Router } from "express";
import { insertGame } from "../controllers/games/insertGames.js";
import { listGames } from "../controllers/games/listGames.js";
import { middlewareInsertGame } from "../middlewares/middlewareInsertGame.js";

const route = Router();

route.get("/games", listGames);
route.post("/games", middlewareInsertGame, insertGame);

export default route;
