import React from "react";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import EventCard from "./EventCard";

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  root_input: {
    paddingLeft: "8px",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    border: "1px solid grey",
    borderRadius: "5px",
    font: "normal normal 300 17px/35px Roboto",
    color: "grey",
    height: "40px",
    marginRight: "18px",
  },
});

const eventBaseUrl = "http://localhost:8080/sports/events";

class UpcomingEvents extends React.Component {
  state = {
   eventDetails: []
  };

  componentWillMount(){
    axios.get(eventBaseUrl).then((res) => {
      this.setState({eventDetails:res.data})
    });

  }

  render() {
    const {
      eventDetails
    } = this.state;
    const { classes } = this.props;
    
    return (
      <div className="flex justify-center">
        {eventDetails.map((data)=>(
         data.eventType==='UPCOMING'? <EventCard eventDetails={data}/>:''
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(UpcomingEvents);
