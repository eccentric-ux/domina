import React from "react";
import { Divider, Typography } from "@material-ui/core";
import "./SectionHeading.css";
import { DashboardTwoTone } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  subTitle: {
    marginLeft: "1rem",
  },
}));

function SectionHeading({ children, subHeading }) {
  const classes = useStyles();
  return (
    <div className="section__header">
      <Typography variant="h2" component="h2" color="primary" gutterBottom>
        {children}
        <Typography
          color="textSecondary"
          variant="h6"
          component="span"
          gutterBottom
          className={classes.subTitle}
        >
          {subHeading}
        </Typography>
      </Typography>

      <Divider />
    </div>
  );
}

export default SectionHeading;
