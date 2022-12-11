import { findCustomerById } from "../../repositories/costumers/findCustomerById.js";
import { findGameById } from "../../repositories/games/findGameById.js";
import { listRentalsByIdGame } from "../../repositories/rentals/listRentalsByIdGame.js";

export async function serviceCheckInsertRental(customerId, gameId, daysRented) {
  try {
    const customerFound = await findCustomerById(customerId);
    if (customerFound.message.length === 0) {
      return { status: false, message: "Customer doesn't exists!" };
    }

    const gameFound = await findGameById(gameId);
    if (gameFound.message.length === 0) {
      return { status: false, message: "Game doesn't exists!" };
    }

    const query = await listRentalsByIdGame(gameId);
    const stockGame = gameFound.message[0].stockTotal;
    const rentalsByGame = query.message;
    const arrayWithDaysRented = rentalsByGame.map((r) => r.daysRented);
    const sumDaysRented = arrayWithDaysRented.reduce(
      (sum, number) => sum + number,
      0
    );

    const availableDaysGame = stockGame - sumDaysRented;
    if (availableDaysGame >= daysRented) {
      return { status: true, message: { customerFound, gameFound } };
    }
    return { status: false, message: "insufficient stock!" };
  } catch (err) {
    return { status: false, message: err };
  }
}
