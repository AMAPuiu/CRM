import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import MainPage from "./Pages/Components/MainPage";
import Login from "./Pages/Components/Login";

const Main = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/MainPage" component={MainPage}></Route>
      </Switch>
    </Router>
  );
};

export default Main;
