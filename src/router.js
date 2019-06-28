import React from "react";
import { Router, Route, Switch } from "dva/router";
import Homepage from "./routes/HomePage";
import SearchPage from "./routes/SearchPage";
import Detail from "./routes/Detail/Detail";
import Login from "./routes/Login/Login";
import Cart from "./routes/Cart/Cart";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/searchpage" component={SearchPage} />
        <Route path="/detail" component={Detail} />
        <Route path="/login" component={Login} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
