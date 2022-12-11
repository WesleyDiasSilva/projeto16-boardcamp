import { listRentalById } from "../../repositories/rentals/listRentalById.js";
import { updateRentalRepository } from "../../repositories/rentals/updateRental.js";
import { calculateDelayFee } from "../../utils/calculateDelayFee.js";
import { nowDate } from "../../utils/nowDate.js";

export async function serviceFinishRental(id) {
  try {
    const rental = await listRentalById(id);
    const updateRental = rental.message;
    updateRental.returnDate = nowDate();
    updateRental.delayFee = calculateDelayFee(updateRental);
    const { status } = await updateRentalRepository(updateRental);
    if (status) {
      return { status: true, message: null };
    }
    return { status: false, message: null };
  } catch (err) {
    return { status: false, message: err };
  }
}
