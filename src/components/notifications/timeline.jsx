import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  oppositeContent: {
    // TODO: adjust this value accordingly
    flex: 0.2,
  },
  timelineContent: {
    padding: "12px 16px",
  },
}));

export default function NotificationTimeline() {
  const classes = useStyles();
  return (
    <Timeline>
      <TimelineItem>
        <TimelineOppositeContent
          className={classes.oppositeContent}
          align="right"
          variant="body2"
          color="textSecondary"
        >
          11:20 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={classes.timelineContent}>
          <Typography variant="h5" component="h1">
            Code
          </Typography>
          <Typography>Because it&apos;s awesome!</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          className={classes.oppositeContent}
          align="right"
          variant="body2"
          color="textSecondary"
        >
          12:59 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className={classes.timelineContent}>
          <Typography variant="h5" component="h1">
            Code
          </Typography>
          <Typography>Because it&apos;s awesome!</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          className={classes.oppositeContent}
          align="right"
          variant="body2"
          color="textSecondary"
        >
          13:40 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
        </TimelineSeparator>
        <TimelineContent className={classes.timelineContent}>
          <Typography variant="h5" component="h1">
            Code
          </Typography>
          <Typography>Because it&apos;s awesome!</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
