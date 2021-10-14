import "./App.css";
import "./index.css";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/Login";
import Main from "./components/Main";
import Signup from "./components/Signup";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Main />
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
