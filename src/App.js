import React, { useEffect } from "react";
import "./assets/css/bootstrap.min.css";
import "./assets/css/app.min.css";
import "./assets/css/custom.css";
import "./assets/css/wysiwyg.css";
import "./assets/css/responsive.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Login from "./containers/login/Login";
import { loadUser } from "./store/actions/auth";
import setAuthToken from "./domain/setAuthToken";
import BeforeLoginRoutes from "./shared/Routes/BeforeLoginRoutes";
import PrivateRoutes from "./shared/Routes/PrivateRoutes";
import Dashboard from "./containers/dashboard/Dashboard";
import PageNotFound from "./containers/notfound/PageNotFound";

import Profile from "./containers/profile/Profile";

function App() {
  useEffect(() => {
    //First we have to bring(get that) token, which is saved in local storage
    const token = localStorage.getItem("token");
    //then we will pass that token in setAuthToken method
    setAuthToken(token);
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <BeforeLoginRoutes exact path="/" component={Login} />
          <PrivateRoutes exact path="/dashboard" component={Dashboard} />
          <PrivateRoutes exact path="/profile" component={Profile} />

          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
