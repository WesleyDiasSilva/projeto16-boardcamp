import { connection } from "../../database/connection.js";

export async function createGame(game) {
  try {
    const { name, image, stockTotal, categoryId, pricePerDay } = game;
    const response = await connection.query(
      'INSERT INTO games ("name", "image", "stockTotal", "categoryId", "pricePerDay") VALUES ($1, $2, $3, $4, $5)',
      [name, image, stockTotal, categoryId, pricePerDay]
    );
    return { status: true, message: response.rowsCount };
  } catch (err) {
    return { status: false, message: null };
  }
}
