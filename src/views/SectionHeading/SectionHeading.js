import React from "react";
import { Divider, Typography } from "@material-ui/core";
import "./SectionHeading.css";
import { DashboardTwoTone } from "@material-ui/icons";

function SectionHeading({ children }) {
  return (
    <div className="section__header">
      <Typography variant="h3" component="h3" color="primary" gutterBottom>
        {children}
      </Typography>
      <Divider />
    </div>
  );
}

export default SectionHeading;
