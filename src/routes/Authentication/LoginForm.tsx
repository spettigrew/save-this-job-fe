import React, { useEffect } from "react";
import * as OktaSignIn from "@okta/okta-signin-widget";
import "@okta/okta-signin-widget/dist/css/okta-sign-in.min.css";
import logo from "../../images/Group 1.png";

import config from "../../utils/config";

const LoginForm = () => {
  useEffect(() => {
    const { pkce, issuer, clientId, redirectUri, scopes } = config.oidc;

    const widget = new OktaSignIn({
      baseUrl: process.env.REACT_APP_BASEURL,
      clientId,
      redirectUri,
      logo: logo,
      language: "en",
      brandName: "Save this Job",
      // Overrides default text when using English.
      i18n: {
        en: {
          "primaryauth.title": "Please Sign in to your Save this Job Account"
        }
      },
      // Changes to widget functionality
      authParams: {
        pkce,
        issuer,
        display: "page",
        scopes
      },
      features: {
        registration: true, // Enable self-service registration flow
        selfServiceUnlock: true, // Will enable unlock in addition to forgotten password
        smsRecovery: true, // Enable SMS-based account recovery
        callRecovery: true, // Enable voice call-based account recovery
        showPasswordToggleOnSignInPage: true
      },
      idps: [
        { type: "google", id: process.env.REACT_APP_GOOGLE_IPD_ID },
        { type: "linkedin", id: process.env.REACT_APP_LINKEDIN_IPD_ID },
        { type: "facebook", id: process.env.REACT_APP_FACEBOOK_IPD_ID }
      ],
      colors: {
        brand: "#08A6C9"
      }
    });

    widget.renderEl(
      { el: "#sign-in-widget" },
      () => {
        /**
         * In this flow, the success handler will not be called because we redirect
         * to the Okta org for the authentication workflow.
         */
      },
      err => {
        throw err;
      }
    );
    return () => {
      widget.remove();
    };
  }, []);

  return (
    <div>
      <div
        style={{
          background: "#F3F8F9",
          height: "100%",
          paddingTop: "20px",
          paddingBottom: "20px"
        }}
        id="sign-in-widget"
      />
    </div>
  );
};
export default LoginForm;
