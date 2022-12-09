import { Router } from "express";
import { insertCostumer } from "../controllers/costumers/insertCostumer.js";
import { listCostumers } from "../controllers/costumers/listCostumers.js";
import { middlewareInsertCostumer } from "../middlewares/middlewareInsertCostumer.js";
import { updateCustomer } from "../controllers/costumers/updateCustomer.js";

const route = Router();

route.put("/customers/:id", middlewareInsertCostumer, updateCustomer);
route.post("/customers", middlewareInsertCostumer, insertCostumer);
route.get("/customers", listCostumers);
route.get("/customers/:id", listCostumers);

export default route;
