import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    zIndex: 1201,
    top: 0,
    left: 0
  },
});

function Top({ value = 0, variant = "determinate", className = "" }) {
  const classes = useStyles();
  return (
    <LinearProgress value={value} variant={variant} className={clsx(classes.root, className)} />
  );
}

export default Top;
