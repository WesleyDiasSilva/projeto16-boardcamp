import { Router } from "express";
import { deleteRental } from "../controllers/rentals/deleteRental.js";
import { finishRental } from "../controllers/rentals/finishRental.js";
import { getRentals } from "../controllers/rentals/getRentals.js";
import { insertRental } from "../controllers/rentals/insertRental.js";
import { middlewareInsertRental } from "../middlewares/middlewareInsertRental.js";
import { middlewareRentalUser } from "../middlewares/middlewareRentalUser.js";

const route = Router();

route.get("/rentals", getRentals);
route.post(
  "/rentals",
  middlewareRentalUser,
  middlewareInsertRental,
  insertRental
);
route.post("/rentals/:id/return", finishRental);
route.delete("/rentals/:id", deleteRental);

export default route;
