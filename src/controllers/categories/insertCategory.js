import { serviceInsertCategory } from "../../services/categories/insertCategory.js";

export async function insertCategory(req, res) {
  const { name } = req.body;
  try {
    const result = await serviceInsertCategory(name);
    if (result.message > 0) {
      return res.status(201).send("new category created");
    }
    res.sendStatus(400);
  } catch {
    res.sendStatus(500);
  }
}
