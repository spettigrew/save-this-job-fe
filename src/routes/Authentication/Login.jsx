import React from "react";
import { Redirect } from "react-router-dom";
import LoginForm from "./LoginForm";
import { useOktaAuth } from "okta-react-bug-fix";

const Login = ({ baseUrl }) => {
  const { authState } = useOktaAuth();

  if (authState.isPending) {
    return <div>Loading...</div>;
  }
  return authState.isAuthenticated ? (
    <Redirect to="/dashboard" />
  ) : (
    <LoginForm baseUrl={baseUrl} />
  );
};

export default Login;

