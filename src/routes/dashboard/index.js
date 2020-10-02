import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import CountUp from "react-countup";
import SectionHeading from "../../views/SectionHeading/SectionHeading";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  yellowCard: {
    borderImage: "linear-gradient(60deg, #ffa726, #fb8c00) 30 30",
  },
  greenCard: {
    borderImage: "linear-gradient(60deg, #66bb6a, #43a047) 30 30",
  },
  redCard: {
    borderImage: "linear-gradient(60deg, #ef5350, #e53935) 30 30",
  },
  blueCard: {
    borderImage: "linear-gradient(60deg, #26c6da, #00acc1) 30 30",
  },
  yellowAvatar: {
    background: "linear-gradient(60deg, #ffa726, #fb8c00)",
  },
  greenAvatar: {
    background: "linear-gradient(60deg, #66bb6a, #43a047)",
  },
  redAvatar: {
    background: "linear-gradient(60deg, #ef5350, #e53935)",
  },
  blueAvatar: {
    background: "linear-gradient(60deg, #26c6da, #00acc1)",
  },
  topCards: {
    position: "relative",
    borderTop: "4px solid",
    boxShadow:
      "0px 6px 7px -4px rgba(182,186,191,0.1), 0px 11px 15px 1px rgba(182,186,191,0.11), 0px 4px 20px 3px rgba(182,186,191,0.12)",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cardIcon: {
    fontSize: "2.5rem",
  },
  bottomCards: {
    boxShadow:
      "0px 6px 7px -4px rgba(182,186,191,0.1), 0px 11px 15px 1px rgba(182,186,191,0.11), 0px 4px 20px 3px rgba(182,186,191,0.12)",
    marginTop: theme.spacing(2),
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  cardRightContent: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "column",
    position: "absolute",
    right: theme.spacing(4),
  },
}));

function Dashboard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className={classes.root}>
      <SectionHeading subHeading={"Monday, 5th Oct 2020"}>
        Dashboard
      </SectionHeading>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <Card
            className={clsx(classes.root, classes.topCards, classes.yellowCard)}
          >
            <CardContent>
              <Grid container direction="row">
                <Grid item xs={4}>
                  <Avatar className={clsx(classes.large, classes.yellowAvatar)}>
                    <Icon
                      className={clsx(
                        classes.cardIcon,
                        "material-icons-outlined"
                      )}
                    >
                      group
                    </Icon>
                  </Avatar>
                </Grid>
                <Grid item xs={8} className={classes.cardRightContent}>
                  <Typography
                    //className={classes.title}
                    variant="h5"
                    component="h5"
                    color="textSecondary"
                    gutterBottom
                  >
                    VISITORS
                  </Typography>
                  <Typography variant="h1" component="h1" gutterBottom>
                    <CountUp end={1024} separator="," />
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card
            className={clsx(classes.root, classes.topCards, classes.greenCard)}
          >
            <CardContent>
              <Grid container>
                <Grid item xs={4}>
                  <Avatar className={clsx(classes.large, classes.greenAvatar)}>
                    <Icon
                      className={clsx(
                        classes.cardIcon,
                        "material-icons-outlined"
                      )}
                    >
                      receipt
                    </Icon>
                  </Avatar>
                </Grid>
                <Grid item xs={8} className={classes.cardRightContent}>
                  <Typography
                    //className={classes.title}
                    variant="h5"
                    component="h5"
                    color="textSecondary"
                    gutterBottom
                  >
                    SALES
                  </Typography>
                  <Typography variant="h1" component="h1" gutterBottom>
                    <CountUp end={1200} prefix="$" separator="," />
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card
            className={clsx(classes.root, classes.topCards, classes.redCard)}
          >
            <CardContent>
              <Grid container>
                <Grid item xs={4}>
                  <Avatar className={clsx(classes.large, classes.redAvatar)}>
                    <Icon
                      className={clsx(
                        classes.cardIcon,
                        "material-icons-outlined"
                      )}
                    >
                      subscriptions
                    </Icon>
                  </Avatar>
                </Grid>
                <Grid item xs={8} className={classes.cardRightContent}>
                  <Typography
                    //className={classes.title}
                    variant="h5"
                    component="h5"
                    color="textSecondary"
                    gutterBottom
                  >
                    SUBSCRIPTIONS
                  </Typography>
                  <Typography variant="h1" component="h1" gutterBottom>
                    <CountUp end={1405} separator="," />
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card
            className={clsx(classes.root, classes.topCards, classes.blueCard)}
          >
            <CardContent>
              <Grid container>
                <Grid item xs={4}>
                  <Avatar className={clsx(classes.large, classes.blueAvatar)}>
                    <Icon
                      className={clsx(
                        classes.cardIcon,
                        "material-icons-outlined"
                      )}
                    >
                      list_alt
                    </Icon>
                  </Avatar>
                </Grid>
                <Grid item xs={8} className={classes.cardRightContent}>
                  <Typography
                    //className={classes.title}
                    variant="h5"
                    component="h5"
                    color="textSecondary"
                    gutterBottom
                  >
                    ORDERS
                  </Typography>
                  <Typography variant="h1" component="h1" gutterBottom>
                    <CountUp end={1305} separator="," />
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Card className={clsx(classes.root, classes.bottomCards)}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Word of the Day
              </Typography>
              <Typography variant="h5" component="h2">
                be{bull}nev{bull}o{bull}lent
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={clsx(classes.root, classes.bottomCards)}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Word of the Day
              </Typography>
              <Typography variant="h5" component="h2">
                be{bull}nev{bull}o{bull}lent
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
