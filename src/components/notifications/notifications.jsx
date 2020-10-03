import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Tooltip from "@material-ui/core/Tooltip";
import Badge from "@material-ui/core/Badge";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from "react-swipeable-views";
import Box from "@material-ui/core/Box";
import Messages from './messages';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={0}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  notifications: {
    padding: theme.spacing(2),
    width: "552px",
    maxWidth: "552px",
  },
  tabTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  tabTitleLabel: {
    paddingLeft: "5px",
  },
}));

const tabs = ({ classes, value }) => [
  {
    key: "timeline",
    label: (
      <div className={classes.tabTitle} style={value === 0 ? {color: "#e53935"} : {}}>
        <Icon className={value !== 0 && "material-icons-outlined"}>
          timeline
        </Icon>
        <span className={classes.tabTitleLabel}>Timeline</span>
      </div>
    ),
  },
  {
    key: "messages",
    label: (
      <div className={classes.tabTitle} style={value === 1 ? {color: "#e53935"} : {}}>
        <Badge badgeContent={" "} variant="dot" color="error">
          <Icon className={value !== 1 && "material-icons-outlined"}>
            email
          </Icon>
        </Badge>
        <span className={classes.tabTitleLabel}>Messages</span>
      </div>
    ),
  },
  {
    key: "report",
    label: (
      <div className={classes.tabTitle} style={value === 2 ? {color: "#e53935"} : {}}>
        <Icon className={value !== 2 && "material-icons-outlined"}>
          analytics
        </Icon>
        <span className={classes.tabTitleLabel}>Report</span>
      </div>
    ),
  },
];

function Notifications() {
  const classes = useStyles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setValue] = useState(0);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setValue(0);
  };

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeTabIndex = (index) => {
    setValue(index);
  };

  const open = !!anchorEl;
  const id = open ? "notifications" : undefined;

  return (
    <>
      <Tooltip title="Notifications">
        <IconButton
          aria-describedby={id}
          variant="contained"
          onClick={handleClick}
        >
          <Badge badgeContent={4} color="error">
            <Icon className="material-icons-outlined">notifications</Icon>
          </Badge>
        </IconButton>
      </Tooltip>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className={classes.notifications}>
          <Tabs
            value={value}
            onChange={handleChangeTab}
            variant="fullWidth"
            scrollButtons={false}
            aria-label="Timeline and Messages"
          >
            {tabs({ classes, value }).map((props) => (
              <Tab {...props} />
            ))}
          </Tabs>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeTabIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              Item One
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <Messages />
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              Item Three
            </TabPanel>
          </SwipeableViews>
        </div>
      </Popover>
    </>
  );
}

export default Notifications;
