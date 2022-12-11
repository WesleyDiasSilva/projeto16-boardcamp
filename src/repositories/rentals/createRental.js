import { connection } from "../../database/connection.js";

export async function createRental(rental) {
  const {
    customerId,
    gameId,
    rentDate,
    daysRented,
    returnDate,
    originalPrice,
    delayFee,
  } = rental;
  try {
    await connection.query(
      `
      INSERT INTO rentals ("customerId", "gameId", "rentDate", "daysRented", "returnDate", "originalPrice", "delayFee") VALUES ($1, $2, $3, $4, $5, $6, $7)
    `,
      [
        customerId,
        gameId,
        rentDate,
        daysRented,
        returnDate,
        originalPrice,
        delayFee,
      ]
    );
    return { status: true, message: "a new rental registered!" };
  } catch (err) {
    return { status: false, message: err };
  }
}
