import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import MUIBreadcrumbs from '@material-ui/core/Breadcrumbs';
import { makeStyles } from "@material-ui/core/styles";
import { Link as NavLink } from "react-router-dom";
import Link from '@material-ui/core/Link';
import { withRouter } from "react-router";

const useStyles = makeStyles((theme) =>({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    avatar: {
        backgroundColor: "rgba(67, 160, 71, 0.1)",
        height: "48px",
        width: "48px"
    },
    icon: {
        color: theme.palette.primary.main
    },
    breadcrumbs: {
        paddingLeft: "10px"
    }
  }));

const findPath = (routes = [], path) => {
    let finalPath = [];
    routes.forEach(route => {
        if(route.route === path) {
            finalPath.push(route);
            return true;
        }
        else if(Array.isArray(route.children)) {
            let newPath = findPath(route.children, path);
            if(newPath.length) {
                finalPath = [...finalPath, route, ...newPath];
                return true;
            }
        }
    });
    return finalPath;
}

function BreadCrumbs({ location, routes }) {
    const classes = useStyles();
    const path = findPath(routes, location.pathname);
    return <div className={classes.root}>
        <Avatar className={classes.avatar}>
            <Icon className={classes.icon}>{`${path[0].icon}`}</Icon>
        </Avatar>
        <MUIBreadcrumbs separator={<Icon>navigate_next</Icon>} className={classes.breadcrumbs} aria-label="breadcrumb">
            {
                path.map(({title, route}, key) => <Link color="inherit" component={NavLink} to={route} key={key}><Typography color="textPrimary">{title}</Typography></Link>)
            }
        </MUIBreadcrumbs>
    </div>
}

export default withRouter(BreadCrumbs);