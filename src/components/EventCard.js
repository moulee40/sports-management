import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const styles = theme => ({
    root: {
        minWidth: 275,
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
});

class EventCard extends React.Component {
  render() {
    const { classes } = this.props;
    const eventDetailsData = this.props.eventDetails;
    return (
         <Card className={classes.root} variant="outlined">
    <CardContent>
      <Typography className={classes.title}  gutterBottom>
      Event ID : {eventDetailsData.id}
      </Typography>
      <Typography className={classes.title}  gutterBottom>
      Event Name : {eventDetailsData.name}
      </Typography>
      <Typography className={classes.title}  gutterBottom>
        Event Location:{eventDetailsData.location}
      </Typography>
      <Typography className={classes.title}  gutterBottom>
        Date:{eventDetailsData.date}
      </Typography>
      <Typography className={classes.title}  gutterBottom>
        Time:{eventDetailsData.time}
      </Typography>
     
     
    </CardContent>
    <CardActions>
      <Button size="small">View Participants</Button>
    </CardActions>
  </Card>);
     
        
  }
}

EventCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventCard);