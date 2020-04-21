import React, { useState } from "react";
import { Form, Grid, Button, TextArea } from "semantic-ui-react";
import { connect } from "react-redux";
import { updateJob, updateCurrentJob } from "../../../redux/actions/index";
function Details(props) {
  const handleChanges = e => {
    const value = e.target.value;
    props.updateCurrentJob({
      ...props.currentJob,
      [e.target.name]: value
    });
  };

  return (
    <>
      <Form style={{ marginLeft: "20px" }}>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Form.Field>
                <label>Company Title:</label>
                <input
                  placeholder="Company Title"
                  name="companyTitle"
                  value={props.currentJob.companyTitle}
                  onChange={handleChanges}
                />
              </Form.Field>
            </Grid.Column>

            <Grid.Column>
              <Form.Field>
                <label>Company URL:</label>
                <input
                  placeholder="Company URL"
                  name="companyUrl"
                  value={props.currentJob.companyUrl || ""}
                  onChange={handleChanges}
                />
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Form.Field>
                <label>Job Post Title:</label>
                <input
                  placeholder="Job Post Title"
                  name="jobTitle"
                  value={props.currentJob.jobTitle || ""}
                  onChange={handleChanges}
                />
              </Form.Field>
            </Grid.Column>

            <Grid.Column>
              <Form.Field>
                <label>Job Post URL:</label>
                <input
                  placeholder="Job Post URL"
                  name="urlText"
                  value={props.currentJob.urlText || ""}
                  onChange={handleChanges}
                />
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <h3>Job Details:</h3>
        <TextArea
          style={{ resize: "none" }}
          rows={20}
          placeholder="Job Description"
          name="description"
          value={props.currentJob.description || ""}
          onChange={handleChanges}
        />
      </Form>
    </>
  );
}
function mapStateToProps(state) {
  return {
    currentJob: state.currentJob
  };
}
const mapDispatchToProps = {
  updateJob,
  updateCurrentJob
};
export default connect(mapStateToProps, mapDispatchToProps)(Details);
