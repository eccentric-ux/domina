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
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  LineChart,
  Line,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
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

const data = [
  {
    name: "India",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "U.S.A",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "China",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Nepal",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "U.K",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "France",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Spain",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function Dashboard() {
  const classes = useStyles();

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
            <CardContent style={{ height: "50vh", width: "100%" }}>
              <ResponsiveContainer>
                <AreaChart
                  data={data}
                  syncId="anyId"
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  {/* <CartesianGrid strokeDasharray="3 3" /> */}
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stackId="1"
                    stroke="#26c6da"
                    fill="#26c6da"
                  />
                  <Area
                    type="monotone"
                    dataKey="pv"
                    stackId="1"
                    stroke="#66bb6a"
                    fill="#66bb6a"
                  />
                  <Area
                    type="monotone"
                    dataKey="amt"
                    stackId="1"
                    stroke="#ffa726"
                    fill="#ffa726"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={clsx(classes.root, classes.bottomCards)}>
            <CardContent style={{ height: "50vh", width: "100%" }}>
              <ResponsiveContainer>
                <LineChart
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
