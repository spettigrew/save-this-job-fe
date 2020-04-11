import React, { useState, useEffect } from "react";
import { Modal, Button, Image, Header, Icon, Form } from "semantic-ui-react";
import api from "../../utils/api";
export default function EditPost(props) {
  const [job, setJob] = useState({
    jobTitle: "",
    url: "",
    companyTitle: "",
    companyUrl: ""
  });

  const handleChanges = e => {
    const value = e.target.value;
    setJob({
      ...job,
      [e.target.name]: value
    });
  };

  const handleSubmit = () => {};

  return (
    <Modal
      style={{ height: "75vh" }}
      trigger={<Icon name="setting" size="large" />}
    >
      <Modal.Header>{props.job.companyTitle}</Modal.Header>
      <Modal.Content image>
        <div>
          <Image size="small" src={props.imgSrc} />
        </div>
        <Modal.Description>
          <Form style={{ marginLeft: "20px" }}>
            <Form.Field>
              <label>Company Title:</label>
              <input
                placeholder="Company Title"
                name="companyTitle"
                onChange={handleChanges}
              />
            </Form.Field>
            <Form.Field>
              <label>Job Title:</label>
              <input
                placeholder="Job Title"
                name="jobTitle"
                onChange={handleChanges}
              />
            </Form.Field>
            <Form.Field>
              <label>Job Post Link:</label>
              <input
                placeholder="URL"
                name="jobPostLink"
                onChange={handleChanges}
              />
            </Form.Field>
            <Form.Field>
              <label>Company URL</label>
              <input
                placeholder="URL"
                name="companyUrl"
                onChange={handleChanges}
              />
            </Form.Field>
            <Button type="submit">Submit</Button>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}
