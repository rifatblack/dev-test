import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import {IntegerValidation} from "../Calculation/BookingCost";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function MileageInputForReturn({
  mileAgeAdded,
  setMileAgeAdded,
}) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate={false} autoComplete="off">
      <TextField
        required
        id="filled-required"
        label="Mileage"
        value={mileAgeAdded}
        error={!IntegerValidation(mileAgeAdded)}
        variant="filled"
        onChange={(e) => setMileAgeAdded(e.target.value)}
        helperText={
          IntegerValidation(mileAgeAdded) ? null : "Input must be a number"
        }
      />
    </form>
  );
}
