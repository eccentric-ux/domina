import React from "react";
import { Divider, Typography, Icon, Tooltip } from "@material-ui/core";
import "./SectionHeading.css";
import { DashboardTwoTone } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  subTitle: {
    marginLeft: "1rem",
  },
  sync: {
    fontSize: "1rem",
    marginLeft: "1.5rem",
    alignSelf: "baseline",
  },
  syncIcon: {
    fontSize: "1.25rem",
    cursor: "pointer",
  },
}));

function SectionHeading({ children, subHeading, sync }) {
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
        {sync ? (
          <Typography
            className={classes.sync}
            component="span"
            color="textSecondary"
          >
            <Tooltip title="sync data updates">
              <Icon className={classes.syncIcon}>sync</Icon>
            </Tooltip>
          </Typography>
        ) : null}
      </Typography>

      <Divider />
    </div>
  );
}

export default SectionHeading;
