import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import OngoingEvents from './OngoingEvents';
import UpcomingEvents from './UpcomingEvents';
import DiscussionForum from './DiscussionForum';
import LastTab from './LastTab';


const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    
  }
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs className={classes.root} value={value} onChange={this.handleChange} centered textColor="primary" indicatorColor="primary">
            <Tab  label="Ongoing Events" href="#basic-tabs"/>
            <Tab  label="Upcoming Events" href="#basic-tabs"/>
            <Tab label="Discussion Forum" href="#basic-tabs" />
            <Tab label="Feedback" href="#basic-tabs" />
          </Tabs>
        </AppBar>
        {value === 0 && <OngoingEvents/>}
        {value === 1 && <UpcomingEvents/>}
        {value === 2 && <DiscussionForum/>}
        {value === 3 && <LastTab/>}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);