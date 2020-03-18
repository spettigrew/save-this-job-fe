import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItem, MenuItemProps } from "semantic-ui-react";
import Styled from "styled-components";
import { useOktaAuth } from "okta-react-bug-fix";

function Navigation({ baseUrl }) {
  const [activeItem, setActiveItem] = useState<string>();
  const issuer = "https://dev-505664.okta.com/oauth2/default";
  const redirectUri = `${window.location.origin}/logged_out`;
  console.log(useOktaAuth, "OSDIGOSDG");
  const { authState, authService } = useOktaAuth();

  const handleItemClick = (name: string) => {
    setActiveItem(name);
  };

  const logout = async () => {
    // Read idToken before local session is cleared
    const idToken = authState.idToken;

    await authService.logout("/");
    // Clear remote session
    window.location.href = `${issuer}/v1/logout?id_token_hint=${idToken}&post_logout_redirect_uri=${redirectUri}`;
  };

  if (authState.isPending) {
    return <div>Loading...</div>;
  }

  return (
    <Menu style={{ position: "fixed", zIndex: "3", width: "100%" }}>
      <Menu.Item
        as={Link}
        to="/"
        name="jobook"
        active={activeItem === "JoBook"}
        onClick={() => {
          handleItemClick("jobook");
        }}
      >
        JoBook
      </Menu.Item>
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
      {authState.isAuthenticated ? (
        <Menu.Item
          as={Link}
          to="/login"
          name="sign-in"
          active={activeItem === "sign-in"}
          onClick={() => {
            logout();
          }}
        >
          Sign-Out
        </Menu.Item>
      ) : (
        <Menu.Item
          as={Link}
          to="/login"
          name="sign-in"
          active={activeItem === "sign-in"}
          onClick={() => {
            handleItemClick("sign-in");
          }}
        >
          Sign-In
        </Menu.Item>
      )}
    </Menu>
  );
}
export default Navigation;
