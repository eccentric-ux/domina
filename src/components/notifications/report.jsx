import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  XAxis,
  YAxis,
  LineChart,
  Line,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "400px",
    padding: "32px 0"
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

function Report() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
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
    </div>
  );
}

export default Report;
