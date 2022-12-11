import { createRental } from "../../repositories/rentals/createRental.js";
import { nowDate } from "../../utils/nowDate.js";

export async function serviceInsertRental(data) {
  try {
    const date = nowDate();
    const rental = {
      customerId: data.customer.id,
      gameId: data.game.id,
      rentDate: date,
      daysRented: data.daysRented,
      returnDate: null,
      originalPrice: data.game.pricePerDay * data.daysRented,
      delayFee: null,
    };
    const response = await createRental(rental);
    if (response.status) {
      return { status: true, message: response.message };
    }
    return { status: false, message: response.message };
  } catch (err) {
    return { status: false, message: err };
  }
}
