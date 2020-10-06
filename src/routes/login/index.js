import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import UnderProgress from "../../pages/under-progress";
import {
  Avatar,
  TextField,
  Typography,
  Form,
  Button,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100%",
    // backgroundColor: "rgb(247, 249, 252)",
    backgroundImage:
      "linear-gradient(to right,rgba(10,10,10,0.8), rgba(100,100,100,0.6)),url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loginContainer: {
    width: "520px",
    maxWidth: "90%",
    height: "520px",
    backgroundColor: "#fff",
    boxShadow: "0 0 14px 0 rgba(53,64,82,.05)",
    borderRadius: "2px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    // transform: "translateX(50%)",
    padding: "2.3rem",
  },
  login: {},
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginTop: "0.4rem",
  },
  signinBtn: {
    width: "100%",
    marginTop: "1.2rem",
    textTransform: "initial",
  },
  fgtBtn: {
    width: "100%",
    marginTop: "0.5rem",
    textTransform: "initial",
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },
  text: {
    margin: "0.7rem 0",
  },
  form: {
    marginTop: "1.5rem",
  },
  h4: {
    marginTop: "1.5rem",
    fontWeight: "bold",
  },
  h6: {
    marginTop: "0.5rem",
  },
}));

function Login({ history }) {
  const classes = useStyles();

  const signInHandler = () => {
    history.push("/tabs");
  };
  return (
    <div className={classes.root}>
      <div className={classes.loginContainer}>
        <Avatar
          className={classes.large}
          alt="logo"
          src="https://www.californiamuseum.org/sites/main/files/imagecache/medium/main-images/screen_shot_2012-07-27_at_6.32.28_pm.png?1578063880"
        />

        <Typography variant="h4" component="h4" className={classes.h4}>
          Welcome back, Ayush !
        </Typography>
        <Typography
          variant="h6"
          component="h6"
          color="textSecondary"
          className={classes.h6}
        >
          Sign in to your account to continue
        </Typography>
        <form className={classes.form}>
          <TextField
            label="Email address"
            required
            fullWidth
            className={classes.text}
          />
          <TextField
            label="Password"
            type="password"
            required
            fullWidth
            className={classes.text}
          />
          <FormControlLabel
            control={<Checkbox name="checkedC" color="primary" />}
            label="Remember me"
          />
          <Button
            variant="contained"
            className={classes.signinBtn}
            onClick={signInHandler}
          >
            Sign in
          </Button>
          <Button variant="default" className={classes.fgtBtn}>
            Forgot password
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
