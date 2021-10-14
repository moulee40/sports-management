import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";
import Alert from "@mui/material/Alert";
import { withRouter } from "react-router";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      shouldAlertDisplay: false,
    };
  }

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleLogin = () => {
    const { username, password } = this.state;
    const {
      history: { push },
    } = this.props;
    if (username === "" || password === "") {
      this.setState({ shouldAlertDisplay: true });
      return;
    }
    this.setState({ shouldAlertDisplay: false });
    //Call Api here
    push({
      pathname: "/home",
      data: "hi", // your data array of objects
    });
  };

  render() {
    const { username, password, shouldAlertDisplay } = this.state;
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
        <TextField
          value={username}
          required
          id="outlined-required"
          label="Username"
          onChange={(e) => this.handleUsernameChange(e)}
        />
        <TextField
          id="outlined-password-input"
          required
          label="Password"
          type="password"
          value={password}
          onChange={(e) => this.handlePasswordChange(e)}
        />
        <Button variant="contained" onClick={this.handleLogin}>
          Login
        </Button>
        {shouldAlertDisplay && (
          <Alert severity="error">Field cannot be empty</Alert>
        )}
      </div>
    );
  }
}

export default withRouter(Login);
