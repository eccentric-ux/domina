import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Drawer from "./components/drawer";
import routes from "./routes.config.json";
import "./styles.css";
import { IconButton, Tooltip, Button } from "@material-ui/core";
import BarChartIcon from "@material-ui/icons/BarChart";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Badge from "@material-ui/core/Badge";
import logoSVG from "./assets/svgs/logo.svg";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    height: "calc(100vh - 64px)",
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
    background: "white",
    boxShadow:
      "0px 6px 7px -4px rgba(182,186,191,0.2), 0px 11px 15px 1px rgba(182,186,191,0.18), 0px 4px 20px 3px rgba(182,186,191,0.16)",
  },
  actions: {
    position: "absolute",
    right: theme.spacing(3),
  },
  user: {
    marginRight: theme.spacing(2),
  },
  userBtn: {
    margin: "0 1rem",
  },
}));
const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);
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

export default function App({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Drawer routes={routes} disableParentLink logo={logo(classes)} />
      <div className={classes.pane}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <Typography variant="h5" noWrap color="primary">
              Domina
            </Typography>
            <div className={classes.actions}>
              <Tooltip title="Statistics">
                <IconButton>
                  <Badge badgeContent={" "} variant="dot" color="primary">
                    <BarChartIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
              <Tooltip title="Notifications">
                <IconButton>
                  <Badge badgeContent={4} color="error">
                    <NotificationsNoneIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
              <Button className={classes.userBtn}>
                <Typography
                  variant="h5"
                  noWrap
                  color="primary"
                  className={classes.user}
                >
                  Shubham
                  <Typography
                    color="textSecondary"
                    variant="body2"
                    gutterBottom
                  >
                    UI Developer
                  </Typography>
                </Typography>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  variant="dot"
                >
                  <Avatar
                    alt="logo"
                    src="https://www.californiamuseum.org/sites/main/files/imagecache/medium/main-images/screen_shot_2012-07-27_at_6.32.28_pm.png?1578063880"
                  />
                </StyledBadge>
              </Button>
              <Tooltip title="Logout">
                <IconButton>
                  <ExitToAppIcon />
                </IconButton>
              </Tooltip>
            </div>
          </Toolbar>
        </AppBar>
        <main className={classes.content}>{children}</main>
      </div>
    </div>
  );
}
