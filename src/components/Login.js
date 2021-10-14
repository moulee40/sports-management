import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="flex flex-col space-y-5 max-w-md mx-auto my-16 min-w-500">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-semibold text-blue-800">Login</h2>
          <div className="flex">
            <p className="text-lg">New User?</p>
            <Link
              to="/signup"
              className="text-blue-500 font-semibold text-lg px-1"
            >
              Sign up
            </Link>
          </div>
        </div>
        <TextField required id="outlined-required" label="Username" />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
        />
        <Button variant="contained">Login</Button>
      </div>
    );
  }
}

export default Login;
