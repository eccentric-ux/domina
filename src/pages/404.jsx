import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import error from '../assets/svgs/404.svg';

/**
 * https://undraw.co/search
 */

 const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: "100%"
    },
    img: {
        height: '50%',
        width: '50%'
    }
 }));

function NotFound() {
    const classes = useStyles();
    return (<div className={classes.root}>
        <img src={error} className={classes.img} alt="Page Not Found" />
    </div>)
}

export default NotFound