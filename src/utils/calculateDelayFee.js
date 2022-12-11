import dayjs from "dayjs";

export function calculateDelayFee(rental) {
  const { rentDate, daysRented, originalPrice } = rental;
  const today = new Date();
  const diffInMs = today - rentDate;
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  const daysWithGame = diffInDays + 1;
  const delayDays = Math.floor(daysWithGame) - daysRented;
  if (delayDays <= 0) {
    const price = 0;
    return price;
  }
  const price = delayDays * originalPrice;
  return price;
}
