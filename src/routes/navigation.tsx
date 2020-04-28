import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Image } from "semantic-ui-react";
import { useOktaAuth } from "okta-react-bug-fix";
import logo from "../images/Group 1.png";
import config from "../utils/config";

function Navigation() {
  const [activeItem, setActiveItem] = useState<string>();
  const { authState, authService } = useOktaAuth();
  const { issuer } = config.oidc;
  const redirectUri = window.location.origin;

  const handleItemClick = (name: string) => {
    setActiveItem(name);
  };

  const logout = async () => {
    // Read idToken before local session is cleared
    const idToken = authState.idToken;
    // clear user token that was set for the extension
    localStorage.removeItem("token");
    // Clear remote session
    window.location.href = `${issuer}/v1/logout?id_token_hint=${idToken}&post_logout_redirect_uri=${redirectUri}`;

    await authService.logout("/");
  };

  return (
    <Menu className="nav">
      <Menu.Item
        as={Link}
        to="/"
        name="save_this_job"
        active={activeItem === "Save this Job"}
        onClick={() => {
          handleItemClick("save_this_job");
        }}
      >
        {<Image src={logo} size="tiny" spaced alt="save this job" />}
      </Menu.Item>
      {authState.isAuthenticated ? (
        <>
          <Menu.Item
            as={Link}
            to="/dashboard"
            name="dashboard"
            active={activeItem === "dashboard"}
            onClick={() => {
              handleItemClick("dashboard");
            }}
            position="right"
          >
            Dashboard
          </Menu.Item>

          <Menu.Item
            as={Link}
            to="/"
            name="sign-out"
            active={activeItem === "sign-out"}
            onClick={() => {
              handleItemClick("sign-out");
              logout();
            }}
          >
            Sign-Out
          </Menu.Item>
        </>
      ) : (
        <Menu.Item
          as={Link}
          to="/login"
          name="sign-in"
          active={activeItem === "sign-in"}
          onClick={() => {
            handleItemClick("sign-in");
          }}
          position="right"
        >
          Sign-In
        </Menu.Item>
      )}
    </Menu>
  );
}
export default Navigation;
