import React from "react";
import { Route, useHistory } from "react-router-dom";
import { Security, SecureRoute, LoginCallback } from "okta-react-bug-fix";
import config from '../../utils/config';
import Home from '../Home';
import LoginForm from "../Authentication/LoginForm";
import Dashboard from "./dashboard";
import PostDetails from "./PostDetails";
import Navigation from "../navigation";
import Footer from '../footer'

const AppWithRouterAccess = () => {
  const history = useHistory();
  const onAuthRequired = () => {
    history.push("/login");
  };

  return (
    <Security
      {...config.oidc}
      onAuthRequired={onAuthRequired}
    >
      <Navigation />
      <div>
        <Route exact path='/' component={Home} />
        <Route path="/implicit/callback" component={LoginCallback} />
        <Route exact path="/login" component={LoginForm} />
        <SecureRoute path="/dashboard" component={Dashboard} />
        <SecureRoute path="/details" component={PostDetails} />
      </div>
      <Footer />
    </Security>
  );
};
export default AppWithRouterAccess;
