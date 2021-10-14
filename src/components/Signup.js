import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="flex flex-col space-y-5 max-w-md mx-auto my-16 min-w-500">
        <h2 className="text-4xl font-semibold text-blue-800">Signup</h2>
        <TextField required id="outlined-username" label="Username" />
        <TextField required id="outlined-email" label="Email" />
        <TextField required id="outlined-phone" label="Phone Number" />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
        />
        <div className="flex items-center justify-between">
          <Button variant="contained">Submit</Button>
          <div className="flex">
            <p className="text-lg">Existing User?</p>
            <Link
              to="/login"
              className="text-blue-500 font-semibold text-lg px-1"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
