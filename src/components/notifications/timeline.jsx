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
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";

const useStyles = makeStyles(() => ({
  oppositeContent: {
    // TODO: adjust this value accordingly
    flex: 0.2,
  },
  heading: {
    fontWeight: "bolder",
    marginBottom: "5px",
  },
  avatarGroup: {
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: "5px"
  }
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
        <TimelineContent>
          <Typography variant="h5" component="h1" className={classes.heading}>
            India Wins World Cup
          </Typography>
          <Typography>Dhoni's Heroic wins india world cup.</Typography>
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
        <TimelineContent>
          <Typography variant="h5" component="h1" className={classes.heading}>
            Election 2020
          </Typography>
          <Typography>U.S.A to vote for elections today.</Typography>
          <AvatarGroup max={4} className={classes.avatarGroup}>
            <Avatar
              alt="Remy Sharp"
              src="https://next--material-ui.netlify.app/static/images/avatar/1.jpg"
            />
            <Avatar
              alt="Travis Howard"
              src="https://next--material-ui.netlify.app/static/images/avatar/2.jpg"
            />
            <Avatar
              alt="Cindy Baker"
              src="https://next--material-ui.netlify.app/static/images/avatar/3.jpg"
            />
            <Avatar
              alt="Agnes Walker"
              src="https://next--material-ui.netlify.app/static/images/avatar/4.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://next--material-ui.netlify.app/static/images/avatar/5.jpg"
            />
          </AvatarGroup>
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
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h5" component="h1" className={classes.heading}>
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
          11:20 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h5" component="h1" className={classes.heading}>
            India Wins World Cup
          </Typography>
          <Typography>Dhoni's Heroic wins india world cup.</Typography>
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
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h5" component="h1" className={classes.heading}>
            Election 2020
          </Typography>
          <Typography>U.S.A to vote for elections today.</Typography>
          <AvatarGroup max={4} className={classes.avatarGroup}>
            <Avatar
              alt="Remy Sharp"
              src="https://next--material-ui.netlify.app/static/images/avatar/1.jpg"
            />
            <Avatar
              alt="Travis Howard"
              src="https://next--material-ui.netlify.app/static/images/avatar/2.jpg"
            />
            <Avatar
              alt="Cindy Baker"
              src="https://next--material-ui.netlify.app/static/images/avatar/3.jpg"
            />
            <Avatar
              alt="Agnes Walker"
              src="https://next--material-ui.netlify.app/static/images/avatar/4.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://next--material-ui.netlify.app/static/images/avatar/5.jpg"
            />
          </AvatarGroup>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
