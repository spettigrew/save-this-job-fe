import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

function Navigation() {
  const [activeItem, setActiveItem] = useState();

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  return (
    <nav>
      <Menu stackable>
        <Menu.Item
          as={Link}
          to="/"
          name="home"
          active={activeItem === "home"}
          onClick={handleItemClick}
        >
          Home
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/login"
          name="features"
          active={activeItem === "features"}
          onClick={handleItemClick}
        >
          Login
        </Menu.Item>
        <Menu.Item
          name="testimonials"
          active={activeItem === "testimonials"}
          onClick={handleItemClick}
        >
          Testimonials
        </Menu.Item>
        <Menu.Item
          name="sign-in"
          active={activeItem === "sign-in"}
          onClick={handleItemClick}
        >
          Sign-in
        </Menu.Item>
      </Menu>
    </nav>
  );
}
export default Navigation;
