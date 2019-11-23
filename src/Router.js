import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "./components/layouts/Menu/Menu";
import List from "./components/Lists/List";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
const Router = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Fragment>
        <Switch>
          <Route path="/" exact component={List} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
};

export default Router;
