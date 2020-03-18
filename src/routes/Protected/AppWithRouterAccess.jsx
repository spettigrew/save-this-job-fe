import React from "react";
import { Route, useHistory } from "react-router-dom";
import { Security, SecureRoute, LoginCallback } from "okta-react-bug-fix";
import RegisterForm from "../Authentication/register";
import Login from "../Authentication/Login";
import Dashboard from "./dashboard";
import Navigation from "../navigation";

const AppWithRouterAccess = () => {
  const history = useHistory();
  const onAuthRequired = () => {
    history.push("/login");
  };

  return (
    <Security
      issuer="https://dev-505664.okta.com/oauth2/default"
      clientId="0oa4246ntis4ZkuTd4x6"
      redirectUri={window.location.origin + "/implicit/callback"}
      onAuthRequired={onAuthRequired}
      pkce={true}
    >
      <SecureRoute path="/dashboard" component={Dashboard} />
      <Navigation baseUrl="https://dev-505664.okta.com" />
      <Route path="/implicit/callback" component={LoginCallback} />
      <Route exact path="/register" component={RegisterForm} />
      <Route
        path="/login"
        render={() => <Login baseUrl="https://dev-505664.okta.com" />}
      />
    </Security>
  );
};
export default AppWithRouterAccess;

