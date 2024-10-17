import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginLeft: 10,
    width: "6rem",
  },
}));

export default function ButtonGroup({ handleOpenCheckoutDialog, selectedRow }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Button
        variant="contained"
        color="#4caf50"
        onClick={() => handleOpenCheckoutDialog("book")}
       
        className={classes.button}
      >
        Book
      </Button>
      <Button
        variant="contained"
        color="#01579b"
        onClick={() => handleOpenCheckoutDialog("return")}
       
        className={classes.button}
      >
        Return
      </Button>
    </div>
  );
}
