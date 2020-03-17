import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItem, MenuItemProps } from "semantic-ui-react";
import Styled from "styled-components";

function Navigation() {
  const [activeItem, setActiveItem] = useState<string>();

  const handleItemClick = (name: string) => {
    setActiveItem(name);
  };

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
      <Menu.Item
        as={Link}
        to="/login"
        name="sign-in"
        active={activeItem === "sign-in"}
        onClick={() => {
          handleItemClick("sign-in");
        }}
      >
        Sign-in
      </Menu.Item>
    </Menu>
  );
}
export default Navigation;
