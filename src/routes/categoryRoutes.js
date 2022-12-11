import { Router } from "express";
import { insertCategory } from "../controllers/categories/insertCategory.js";
import { listCategories } from "../controllers/categories/listCategories.js";
import { middlewareInsertCategory } from "../middlewares/middlewareInsertCategory.js";

const route = Router();

route.get("/categories", listCategories);
route.post("/categories", middlewareInsertCategory, insertCategory);

export default route;
