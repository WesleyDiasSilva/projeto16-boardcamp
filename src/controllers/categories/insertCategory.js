import { serviceInsertCategory } from "../../services/categories/insertCategory.js";

export async function insertCategory(req, res) {
  const { name } = req.body;
  try {
    const result = await serviceInsertCategory(name);
    if (result.status) {
      return res.status(201).send("new category created");
    }
    res.status(409).send(result.message);
  } catch {
    res.sendStatus(500);
  }
}
