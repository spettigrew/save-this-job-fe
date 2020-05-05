import React, { useState } from "react";
import { List, Header, Form, Button } from "semantic-ui-react";
import { connect } from "react-redux";

function Tasks(props) {
  const handleChanges = e => {
    const value = e.target.value;
    // props.updateCurrentJob({
    //   ...props.currentJob,
    //   [e.target.name]: value,
    // });
  };

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
      <List></List>
    </div>
  );
}
function mapStateToProps(state) {
  return {};
}
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
