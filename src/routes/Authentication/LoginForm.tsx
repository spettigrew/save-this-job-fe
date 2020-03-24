import React, { useEffect } from "react";
import * as OktaSignIn from "@okta/okta-signin-widget";
import "@okta/okta-signin-widget/dist/css/okta-sign-in.min.css";
import logo from "../../images/Component 2.png";

import config from "../../utils/config";

const LoginForm = () => {
  useEffect(() => {
    const { pkce, issuer, clientId, redirectUri, scopes } = config.oidc;

    const widget = new OktaSignIn({
      baseUrl: process.env.REACT_APP_BASE_URL,
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
        brand: "#FC4A1A"
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
      <div id="sign-in-widget" />
    </div>
  );
};
export default LoginForm;
