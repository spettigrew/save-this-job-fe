import React, { useState, useEffect } from "react";
import { List, Header, Icon, Form, Button, Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import { addTask, getTasks, deleteTask } from "../../../redux/actions/index";

function Tasks(props) {
  const handleChanges = e => {
    const value = e.target.value;
    setNewTask({ ...newTask, [e.target.name]: value });
  };

  useEffect(() => {
    console.log("tasks");
    props.getTasks(props.currentJob.id);
  }, []);

  const handleSubmit = () => {
    props.addTask(newTask, props.currentJob.id);
  };
  const [newTask, setNewTask] = useState({
    taskName: "",
    date: "",
    completed: false
  });

  return (
    <div>
      <Header as="h2" content="Tasks" />
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Task"
            placeholder="Task"
            name="taskName"
            onChange={handleChanges}
          />
          <Form.Input
            fluid
            label="Date"
            placeholder="Date"
            type="date"
            name="date"
            onChange={handleChanges}
          />
        </Form.Group>

        <Form.Button onClick={() => handleSubmit()}>Submit</Form.Button>
      </Form>
      <List selection style={{ maxWidth: "50%" }}>
        {props.tasks?.map(task => (
          <List.Item>
            <List.Content>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <List.Header as="h4">{task.taskName}</List.Header>
                <Icon
                  name="close"
                  color="red"
                  onClick={() => props.deleteTask(task.id, props.currentJob.id)}
                />
              </div>
              <List.Description>
                {new Date(task.date)
                  .toISOString()
                  .slice(
                    0,
                    new Date(task.date).toISOString().indexOf("T")
                  )}{" "}
              </List.Description>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
    currentJob: state.currentJob,
    loading: state.loading
  };
}
const mapDispatchToProps = {
  addTask,
  getTasks,
  deleteTask
};
export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
