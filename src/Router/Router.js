import React from "react";
import AddSearch from "./../components/AddSearch";
import Repos from "./../components/Repos";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Router = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={AddSearch} exact={true} />
        <Route path="/:user" component={Repos} exact={true} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
