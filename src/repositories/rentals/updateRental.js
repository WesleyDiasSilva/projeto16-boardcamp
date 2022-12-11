import { connection } from "../../database/connection.js";

export async function updateRentalRepository(rental) {
  const {
    customerId,
    gameId,
    rentDate,
    daysRented,
    returnDate,
    originalPrice,
    delayFee,
    id,
  } = rental;
  try {
    connection.query(
      `
      UPDATE rentals SET "customerId"=$1, "gameId"=$2, "rentDate"=$3, "daysRented"=$4, "returnDate"=$5, "originalPrice"=$6, "delayFee"=$7 WHERE id=$8
    `,
      [
        customerId,
        gameId,
        rentDate,
        daysRented,
        returnDate,
        originalPrice,
        delayFee,
        id,
      ]
    );
    return { status: true, message: null };
  } catch (err) {
    return { status: false, message: err };
  }
}
