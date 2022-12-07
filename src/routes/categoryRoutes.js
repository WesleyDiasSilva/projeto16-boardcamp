import { Router } from "express";
import { insertCategory } from "../controllers/categories/insertCategory.js";
import { listCategories } from "../controllers/categories/listCategories.js";

const route = Router();

route.get("/categories", listCategories)
route.post("/categories", insertCategory)

export default route;