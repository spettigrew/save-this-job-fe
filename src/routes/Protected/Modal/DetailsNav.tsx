import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import Notes from "./Notes";
import Details from "./Details";
import Tasks from "./Tasks";
function Navigation(props) {
  const [activeItem, setActiveItem] = useState<string>("job_details");

  const handleActive = (e, { name }) => {
    setActiveItem(name);
  };
  useEffect(() => {
    switch (activeItem) {
      case "job_details":
        props.setView(<Details />);
        break;
      case "notes":
        props.setView(<Notes />);
        break;
      case "tasks":
        props.setView(<Tasks />);
        break;

      default:
    }
  }, [activeItem]);
  return (
    <Menu className="detailsNav">
      <Menu.Item
        name="job_details"
        active={activeItem === "job_details"}
        onClick={handleActive}
      >
        Job Details
      </Menu.Item>
      <Menu.Item
        name="notes"
        active={activeItem === "notes"}
        onClick={handleActive}
      >
        Notes
      </Menu.Item>
      <Menu.Item
        name="tasks"
        active={activeItem === "tasks"}
        onClick={handleActive}
      >
        Tasks
      </Menu.Item>
    </Menu>
  );
}
export default Navigation;
