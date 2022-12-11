import { deleteRentalRepository } from "../../repositories/rentals/deleteRental.js";

export async function serviceDeleteRental(id) {
  try {
    const responseDelete = await deleteRentalRepository(id);
    if (responseDelete.status) {
      return { status: true, message: null };
    }
    return { status: false, message: null };
  } catch (err) {
    return { status: false, message: err };
  }
}
