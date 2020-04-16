import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

function Navigation() {
  const [activeItem, setActiveItem] = useState<string>("job_details");

  const handleItemClick = (name: string) => {
    setActiveItem(name);
  };

  return (
    <Menu className="detailsNav">
      <Menu.Item
        as={Link}
        to="/details"
        name="job_details"
        active={activeItem === "job_details"}
        onClick={() => {
          handleItemClick("job_details");
        }}
      >
        Job Details
      </Menu.Item>
      <Menu.Item
        as={Link}
        to="/details"
        name="notes"
        active={activeItem === "notes"}
        onClick={() => {
          handleItemClick("notes");
        }}
      >
        Notes
      </Menu.Item>
      <Menu.Item
        as={Link}
        to="#"
        name="lorum"
        active={activeItem === "lorum"}
        onClick={() => {
          handleItemClick("lorum");
        }}
      >
        Lorum
      </Menu.Item>
    </Menu>
  );
}
export default Navigation;
