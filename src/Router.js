import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "./components/layouts/Menu/Menu";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import {
  ChannelPage,
  CommentPage,
  HomePage
} from "./components/Loading/Loadable";

const Router = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Fragment>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/channels" exact component={ChannelPage} />
          <Route path="/comments" exact component={CommentPage} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
};

export default Router;
