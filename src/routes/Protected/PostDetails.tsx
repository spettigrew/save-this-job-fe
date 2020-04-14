import React, { useState, useEffect } from "react";
import {
  Modal,
  Button,
  Image,
  Header,
  Icon,
  Form,
  Grid,
  TextArea,
  Rating,
  Label
} from "semantic-ui-react";
import api from "../../utils/api";
import DetailsNav from "../Modal/DetailsNav";

export default function PostDetails(props) {
  const [job, setJob] = useState({
    jobTitle: props.job.jobTitle,
    url: props.job.urlText,
    companyTitle: props.job.companyTitle,
    companyUrl: !props.job.companyUrl ? "ACME" : props.job.companyUrl,
    details: "I'm a detail",
    rating: !props.job.rating && 3
  });

  const handleChanges = e => {
    const value = e.target.value;
    setJob({
      ...job,
      [e.target.name]: value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    console.log(job);
  };

  const handleRating = (e, data) => {
    setJob({
      ...job,
      rating: data.rating
    });
  };

  return (
    <Modal
      style={{ height: "75vh" }}
      trigger={<Icon name="setting" size="large" />}
    >
      <Modal.Header>{props.job.companyTitle}</Modal.Header>
      <DetailsNav />
      <Modal.Content>
        <Modal.Description>
          <Grid>
            <Grid.Column width={10}>
              <Form onSubmit={handleSubmit} style={{ marginLeft: "20px" }}>
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
                          name="url"
                          value={job.url}
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
                  name="details"
                  value={job.details}
                  onChange={handleChanges}
                />
                <Button type="submit" floated="right">
                  Save
                </Button>
              </Form>
            </Grid.Column>

            <Grid.Column floated="right" width={5}>
              <div>
                <Image size="small" src={props.imgSrc} />
                <Header as="h3" content={props.job.jobTitle} />
              </div>
              <Rating
                onRate={handleRating}
                rating={job.rating}
                maxRating={5}
                clearable
              />
            </Grid.Column>
          </Grid>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}
