import { serviceListCategories } from "../../services/categories/listCategories.js";

export async function listCategories(req, res) {
  try {
    const listCategories = await serviceListCategories();
    if (listCategories.message) {
      return res.status(200).send(listCategories.message.rows);
    }
    return res.status(200).send("Not found categories");
  } catch {
    return res.sendStatus(500);
  }
}
