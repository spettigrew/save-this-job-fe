import React, { useState, useEffect } from "react";
import OktaAuth from "@okta/okta-auth-js";
import { Redirect } from "react-router-dom";
import { useOktaAuth } from "okta-react-bug-fix";
import GoogleLogin from "react-google-login";
import {
  Form,
  Checkbox,
  Button,
  Grid,
  Header,
  Divider
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import Styled from "styled-components";

const Container = Styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width: 100%;
    height:calc(100vh - 40px);
`;

interface MyUser {
  username: string;
  password: string;
}

function LoginForm() {
  const [user, setUser] = useState<MyUser>({
    username: "",
    password: ""
  });
  const { authService } = useOktaAuth();
  const baseUrl = process.env.REACT_APP_BASEURL;
  const [sessionToken, setSessionToken] = useState();

  const handleChanges = (e: any): void => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    const { username, password } = user;
    const oktaAuth = new OktaAuth({ issuer: baseUrl });
    oktaAuth
      .signIn({ username, password })
      .then(res => setSessionToken(res.sessionToken))
      .catch(err => console.log("Found an error", err));
  };

  if (sessionToken) {
    authService.redirect({ sessionToken });
    return <Redirect to="/dashboard" />;
  }
  const grabToken = () => {
    console.log("IM HIT");
  };
  const responseGoogleSuccess = response => {
    console.log(response);
    localStorage.setItem("profileObj", response.profileObj.toString());
  };
  const responseGoogleFailure = response => {
    console.log(response);
  };

  return (
    <Container>
      <Form
        onSubmit={handleSubmit}
        style={{
          width: "300px",
          padding: "60px",
          boxShadow: "4px 4px 10px #333333",
          borderRadius: "5px"
        }}
      >
        <Header as="h1" content="JoBook" />

        <Form.Field>
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            name="username"
            onChange={handleChanges}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChanges}
          />
        </Form.Field>
        <Form.Field
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <Button size="tiny" type="submit" primary={true}>
            Login
          </Button>

          <Divider horizontal={true}>OR</Divider>

          <GoogleLogin
            clientId="106999113670-ojltpk2fpn1gnsegcl840hnk3g34h4qq.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseGoogleSuccess}
            onFailure={responseGoogleFailure}
            cookiePolicy={"single_host_origin"}
          />
          {/* <Button><a href='https://dev-505664.okta.com/oauth2/v1/authorize?idp=0oa4cinpegREwYWrd4x6&client_id=0oa4246ntis4ZkuTd4x6&response_type=id_token&response_mode=fragment&scope=openid%20email%20profile&redirect_uri=http://localhost:3000/implicit/callback&state=WM6D2&nonce=YsG76joKF'>Login with Google</a></Button> */}

          <Button
            style={{ background: "transparent", color: "teal" }}
            as={Link}
            to="/register"
            size="tiny"
            secondary={true}
          >
            Register
          </Button>
        </Form.Field>
      </Form>
    </Container>
  );
}

export default LoginForm;
