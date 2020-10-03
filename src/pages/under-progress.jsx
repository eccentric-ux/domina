import React from 'react';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import progress from '../assets/svgs/under-construction.svg';

const useStyles = makeStyles({
    img: {
        height: "100%",
        width: "100%"
    },
    container: {
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    },
    title: {
        paddingTop: "15px"
    }
});

function UnderProgress() {
    const classes = useStyles();
    return <Box padding={3} className={classes.container}>
        <img src={progress} className={classes.img} />
        <Typography variant="h2" className={classes.title} gutterBottom>Under Progress</Typography>
    </Box>
}

export default UnderProgress;