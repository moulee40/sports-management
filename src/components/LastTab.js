import React from "react";
import { withStyles } from "@material-ui/core/styles";


const styles = (theme) => ({
  root: {
    display: "flex",
  },
 
});


class LastTab extends React.Component {
  state = {
   eventDetails: [],
   isShowCard:true,
   newEventDetails: [],
  };

  

  render() {
    return (
      <div className="flex justify-center" >
          <h1>Thanks for using Sports App</h1>
      </div>
    );
  }
}

export default withStyles(styles)(LastTab);
