import { connection } from "../../database/connection.js";

export async function getGames(name = null) {
  try {
    if (name) {
      const nameGame = name + "%";
      const gamesFiltred = await connection.query(
        'SELECT g.id, g.name, g.image, g."stockTotal", g."categoryId", g."pricePerDay", c.name AS "categoryName" FROM categories c JOIN games g ON g."categoryId" = c.id WHERE g.name LIKE $1',
        [nameGame]
      );

      return { status: true, message: gamesFiltred };
    }
    const allGames = await connection.query(
      'SELECT g.id, g.name, g.image, g."stockTotal", g."categoryId", g."pricePerDay", c.name AS category_name FROM categories c JOIN games g ON g."categoryId" = c.id;'
    );
    return { status: true, message: allGames };
  } catch (err) {
    console.log(err);
    return { status: false, message: null };
  }
}
