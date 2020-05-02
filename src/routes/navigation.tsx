import React, { useState } from "react";
import logout from "./logout";
import { Link } from "react-router-dom";
import { Menu, Image } from "semantic-ui-react";
import { useOktaAuth } from "okta-react-bug-fix";
import logo from "../images/Group 1.png";

function Navigation() {
  const [activeItem, setActiveItem] = useState();
  const { authState, authService } = useOktaAuth();

  const handleItemClick = name => setActiveItem(name);

  return (
    <Menu className="nav">
      <Menu.Item
        as={Link}
        to="/"
        name="save_this_job"
        active={activeItem === "Save this Job"}
        onClick={() => handleItemClick("save_this_job")}
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
            onClick={() => handleItemClick("dashboard")}
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
              logout(authState, authService);
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
          onClick={() => handleItemClick("sign-in")}
          position="right"
        >
          Sign-In
        </Menu.Item>
      )}
    </Menu>
  );
}
export default Navigation;
