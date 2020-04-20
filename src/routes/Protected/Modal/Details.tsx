import React, { useState } from "react";
import { Form, Grid, Button, TextArea } from "semantic-ui-react";
import { connect } from "react-redux";
import { updateJob } from "../../../redux/actions/index";
function Details(props) {
  const handleChanges = e => {
    const value = e.target.value;
    setJob({
      ...job,
      [e.target.name]: value
    });
    props.setUpdatedJob({
      ...props.updatedJob,
      ...job,
      [e.target.name]: value
    });
  };

  const [job, setJob] = useState({
    jobTitle: props.job?.jobTitle || "",
    urlText: props.job?.urlText || "",
    companyTitle: props.job?.companyTitle || "",
    companyUrl: props.job?.companyUrl || "",
    description: props.job?.description || ""
  });
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
                  value={job.companyTitle}
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
                  value={job.companyUrl}
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
                  value={job.jobTitle}
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
                  value={job.urlText}
                  onChange={handleChanges}
                />
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <h3>Job Details:</h3>
        <TextArea
          rows={20}
          placeholder="Job Description"
          name="description"
          value={job.description}
          onChange={handleChanges}
        />
      </Form>
    </>
  );
}
const mapDispatchToProps = {
  updateJob
};
export default connect(null, mapDispatchToProps)(Details);
