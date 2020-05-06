import React, { useState } from "react";
import { Card, Image, Icon, Confirm } from "semantic-ui-react";
import PostDetails from "./Modal/PostDetails";
import blue from "../../images/icon.blue.png";

export default function DashCard(props) {
  const [open, setOpen] = useState(false);
  const [confirmClose, setConfirmClose] = useState(false);

  function closeModal() {
    if (!props.updateDisabled) {
      setConfirmClose(true);
    } else {
      setOpen(false);
    }
  }
  const job = props.job;

  const imgSrc = job.logo || blue;
  return (
    <>
      <PostDetails
        open={open}
        setOpen={setOpen}
        closeModal={closeModal}
        imgSrc={imgSrc}
        jobId={job.id}
        job={job}
      />
      <Confirm
        header="Changes Were Made"
        open={confirmClose}
        onCancel={() => setConfirmClose(false)}
        content="Are you sure you want to exit without saving?"
        onConfirm={() => {
          setConfirmClose(false);
          setOpen(false);
        }}
      />
      <Card
        onClick={() => {
          setOpen(true);
          props.getCurrentJob(job.id);
        }}
        raised
        style={{
          margin: "10px auto 0",
          minWidth: "200px"
        }}
      >
        <Card.Content>
          <Card.Header style={{ textOverflow: "ellipsis" }}>
            <Image
              src={imgSrc}
              ui={false}
              style={{
                height: "15px",
                marginRight: "15px"
              }}
            />
            {job.companyUrl ? (
              <a href={job.companyUrl} target="_blank">
                {job.companyTitle}
              </a>
            ) : (
              job.companyTitle
            )}
          </Card.Header>
          <Card.Description style={{ textOverflow: "ellipsis" }}>
            {job.jobTitle}
          </Card.Description>
        </Card.Content>
      </Card>
    </>
  );
}
