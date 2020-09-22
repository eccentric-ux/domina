import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "./components/drawer";
import routes from "./routes.config.json";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
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
}));

const logo = (classes) => (
  <div className={classes.logoContainer}>
    <Avatar
      className={classes.large}
      alt="logo"
      src="https://avatars0.githubusercontent.com/u/71497567?s=400&u=92109698dfd9854b098c6f6bff447bab49f705b5&v=4"
    />
  </div>
);

export default function App({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Drawer routes={routes} disableParentLink logo={logo(classes)} />
      <div className={classes.pane}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" noWrap>
              Theme
            </Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.content}>{children}</main>
      </div>
    </div>
  );
}
