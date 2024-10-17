import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {calculateBookingCost} from "../Calculation/BookingCost";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      marginLeft: 0,
      width: "100%",
      height: theme.spacing(5),
      display: "flex",
      flexDirection: "row",
      paddingLeft: theme.spacing(1),
      alignItems: "center",
      "& h3": {
        color: "#000000ab",
        margin: 0,
        padding: 0,
        marginRight: 10,
      },
      "& h4": {
        color: "red",
        fontSize: 12,
        margin: 0,
        padding: 0,
        marginTop: 2,
        fontWeight: 400,
      },
    },
  },
}));

export default function ModalFooterSection({ duration, product }) {
  const classes = useStyles();
  const isBookingPossible = product.discount
    ? true
    : duration > product.minimum_rent_period - 1
    ? true
    : false;

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <h3>Duration</h3>
        {duration < 1 ? (
          <h4>End Date must be after Start Date</h4>
        ) : (
          <h3>{duration} day(s)</h3>
        )}
      </Paper>
      <Paper elevation={3}>
        <h3>Your estimated price is </h3>
        {duration < 1 ? (
          <h4>Not Available</h4>
        ) : !isBookingPossible ? (
          <h4>
            ** NB: This product must be rented for at least {product.minimum_rent_period}{" "}
            day(s)
          </h4>
        ) : (
          <h3>
            {calculateBookingCost(
              product.price,
              product.discount,
              product.minimum_rent_period,
              duration
            )}
          </h3>
        )}
      </Paper>
    </div>
  );
}
