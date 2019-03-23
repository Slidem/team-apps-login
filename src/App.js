import React, { Component } from "react";
import Login from "./components/login";
import { Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/" component={Login} />
      </React.Fragment>
    );
  }
}

export default App;
