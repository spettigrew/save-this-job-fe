import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as OktaSignIn from "@okta/okta-signin-widget";
import "@okta/okta-signin-widget/dist/css/okta-sign-in.min.css";

import config from "../../utils/config";

const LoginForm = () => {
  const history = useHistory();
  useEffect(() => {
    const { pkce, issuer, clientId, redirectUri, scopes } = config.oidc;

    const widget = new OktaSignIn({
      baseUrl: process.env.REACT_APP_BASEURL,
      clientId,
      redirectUri,
      logo: "",
      i18n: {
        en: {
          "primaryauth.title": "Sign in to Save this Job"
        }
      },
      authParams: {
        pkce,
        issuer,
        display: "page",
        scopes
      },
      idps: [{ type: "google", id: process.env.REACT_APP_GOOGLE_IPD_ID }],

      customButtons: [
        {
          title: "Create a new Account",
          className: "btn-customAuth",
          click: function() {
            widget.remove();
            history.push("/register");
          }
        }
      ]
    });

    widget.renderEl(
      { el: "#sign-in-widget" },
      res => {
        if (res.status === "SUCCESS") {
          // Hide element
          return $("#sign-in-widget").hide();
        }
      },
      err => {
        throw err;
      }
    );
  }, []);

  return (
    <div>
      <div id="sign-in-widget" />
    </div>
  );
};
export default LoginForm;
