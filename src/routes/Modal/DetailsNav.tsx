import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

function Navigation() {
  const [activeItem, setActiveItem] = useState<string>();

  const handleItemClick = (name: string) => {
    setActiveItem(name);
  };

  return (
    <Menu className="detailsNav">
      <Menu.Item
        as={Link}
        to="/"
        name="save_this_job"
        active={activeItem === "Save this Job"}
        onClick={() => {
          handleItemClick("save_this_job");
        }}
      >
        Job Details
      </Menu.Item>
      <Menu.Item
        as={Link}
        to="/"
        name="save_this_job"
        active={activeItem === "Save this Job"}
        onClick={() => {
          handleItemClick("save_this_job");
        }}
      >
        Notes
      </Menu.Item>
      <Menu.Item
        as={Link}
        to="/"
        name="save_this_job"
        active={activeItem === "Save this Job"}
        onClick={() => {
          handleItemClick("save_this_job");
        }}
      >
        Lorum
      </Menu.Item>
    </Menu>
  );
}
export default Navigation;
