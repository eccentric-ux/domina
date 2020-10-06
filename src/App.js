import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import BarChartIcon from "@material-ui/icons/BarChart";
import Badge from "@material-ui/core/Badge";
import { withRouter } from "react-router";
import Drawer from "./components/drawer";
import BreadCrumbs from "./components/breadcrumbs";
import Notifications from "./components/notifications";
import UserMenu from "./components/user-menu";
import routes from "./routes.config.json"; 
import logoSVG from "./assets/svgs/logo.svg";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    height: "calc(100vh - 64px - 0.5rem)",
  },
  pane: {
    flex: 1,
  },
  logoContainer: {
    display: "flex",
    height: "100px",
    alignItems: "center",
    justifyContent: "center",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  appbar: {
    background: "inherit",
    boxShadow: "none",
    marginTop: "0.5rem",
    // boxShadow:
    //   "0px 6px 7px -4px rgba(182,186,191,0.2), 0px 11px 15px 1px rgba(182,186,191,0.18), 0px 4px 20px 3px rgba(182,186,191,0.16)",
  },
  actions: {
    position: "absolute",
    right: theme.spacing(3),
  },
  login: {
    backgroundColor: "rgb(247, 249, 252)",
  },
}));

const logo = (classes) => (
  <div className={classes.logoContainer}>
    <Avatar
      className={classes.large}
      alt="logo"
      src={logoSVG}
      // src="https://avatars0.githubusercontent.com/u/71497567?s=400&u=92109698dfd9854b098c6f6bff447bab49f705b5&v=4"
    />
  </div>
);

function App({ children, location }) {
  const isLoginRoute = location.pathname === "/login";
  const classes = useStyles();

  if (isLoginRoute) {
    return <main className={classes.login}>{children}</main>;
  }
  return (
    <div className={classes.root}>
      <Drawer routes={routes} disableParentLink logo={logo(classes)} />
      <div className={classes.pane}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <BreadCrumbs routes={routes} />
            <div className={classes.actions}>
              <Tooltip title="Statistics">
                <IconButton>
                  <Badge badgeContent={" "} variant="dot" color="primary">
                    <BarChartIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
              <Notifications />
              <UserMenu />
            </div>
          </Toolbar>
        </AppBar>
        <main className={classes.content}>{children}</main>
      </div>
    </div>
  );
}

export default withRouter(App);
