import { listRentals } from "../../repositories/rentals/listAllRentals.js";
import { listRentalsByIdCustomer } from "../../repositories/rentals/listRentalsByCustomerId.js";
import { listRentalsByIdGame } from "../../repositories/rentals/listRentalsByIdGame.js";
import { listRentalsCustomerAndGame } from "../../repositories/rentals/listRentalsCustomerIdAndGameId.js";

export async function serviceGetRentals(customerId, gameId) {
  try {
    let rentals;
    if (customerId && gameId) {
      rentals = await listRentalsCustomerAndGame(gameId, customerId);
    } else if (customerId) {
      rentals = await listRentalsByIdCustomer(customerId);
    } else if (gameId) {
      rentals = await listRentalsByIdGame(gameId);
    } else {
      rentals = await listRentals();
    }
    return { status: true, message: rentals.message };
  } catch (err) {
    return { status: false, message: err };
  }
}
