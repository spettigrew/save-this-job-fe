import React, { useState } from "react";
import { Form, Grid, Button, Icon, TextArea, Label } from "semantic-ui-react";
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
  const [editUrl, setEditUrl] = useState(false);
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
              {editUrl ? (
                <Form.Field>
                  <label style={{ fontWeight: "bold" }}>
                    Job Post URL:
                    <Icon
                      style={{ marginLeft: "20px", cursor: "pointer" }}
                      name="edit"
                      color="blue"
                      onClick={() => setEditUrl(!editUrl)}
                    />
                  </label>

                  <input
                    placeholder="Job Post URL"
                    name="urlText"
                    value={props.currentJob.urlText || ""}
                    onChange={handleChanges}
                  />
                </Form.Field>
              ) : (
                <>
                  <label style={{ fontWeight: "bold" }}>
                    Job Post URL:
                    <Icon
                      style={{ marginLeft: "20px", cursor: "pointer" }}
                      name="edit"
                      color="blue"
                      onClick={() => setEditUrl(!editUrl)}
                    />
                  </label>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      height: "80%",
                      width: "100%"
                    }}
                  >
                    <a
                      style={{ fontSize: "1.1rem" }}
                      href={props.currentJob.urlText || "#"}
                    >
                      {props.currentJob.urlText.length > 27
                        ? props.currentJob.urlText.slice(0, 24) + "..."
                        : props.currentJob.urlText}
                    </a>
                  </div>
                </>
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <h3>Job Details:</h3>
        <TextArea
          style={{ resize: "none", width: "100%" }}
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
