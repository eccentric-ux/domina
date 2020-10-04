import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import UnderProgress from '../../pages/under-progress';

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      height: "100%",
      width: "100%"
    }
}));

function Tabs() {
    const classes = useStyles();

    return <div className={classes.root}>
        <UnderProgress />
    </div>
}

export default Tabs;