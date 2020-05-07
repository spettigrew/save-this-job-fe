import React, { useState, useEffect } from "react";
import { List, Header, Form, Button, Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import { getTasks } from "../../../redux/actions/index";

function Tasks(props) {
  // const handleChanges = (e) => {
  //   const value = e.target.value;
  //   props.updateCurrentTask({
  //     ...props.currentTask,
  //     [e.target.name]: value,
  //   });
  // };

  useEffect(() => {
    props.getTasks();
  }, []);

  console.log("tasks", props.tasks);

  return (
    <div>
      <Header as="h2" content="Tasks" />
      <Form>
        <Form.Group widths="equal">
          <Form.Input fluid label="Task" placeholder="Task" />
          <Form.Input fluid label="Date" placeholder="Date" type="date" />
        </Form.Group>

        <Form.Button>Submit</Form.Button>
      </Form>
      <List>
        {props.tasks?.map(task => (
          <List.Item>
            {task.taskName}
            {task.date}
          </List.Item>
        ))}
      </List>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}
const mapDispatchToProps = {
  getTasks
};
export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
