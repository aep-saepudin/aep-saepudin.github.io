import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import Menu from "./Components/Menu";
import Brand from "./Components/Brand";
import Error from "./Components/Error";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Switch>
          <Route path="/error">
            <Error />
          </Route>
          <Route path="/:brand">
            <Brand />
          </Route>
          <Route path="/">Please select brand...</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
