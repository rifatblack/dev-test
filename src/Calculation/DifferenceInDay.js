import "date-fns";
import { differenceInDays } from "date-fns";

export const DifferenceInDay = (startDate, endDate) => {
    console.log(startDate, endDate);
    return (
      differenceInDays(
        new Date(endDate).setHours(0, 0, 0, 0),
        new Date(startDate).setHours(0, 0, 0, 0)
      ) + 1
    );
  };