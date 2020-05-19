import React, { useState } from "react";
import { Card, Image, Confirm } from "semantic-ui-react";
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
        onMouseDown={e => {
          if (props.map === true) {
            setOpen(true);
            props.getCurrentJob(job.id);
          }
        }}
        onClick={() => {
          setOpen(true);
          props.getCurrentJob(job.id);
        }}
        raised
        style={{
          margin: "8px auto 0",
          minWidth: "180px"
        }}
      >
        <Card.Content>
          <Card.Header
            style={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
              width: "180px"
            }}
          >
            <Image
              src={imgSrc}
              ui={false}
              style={{
                height: "15px",
                marginRight: "15px"
              }}
            />
            {job.companyTitle}
          </Card.Header>
          <Card.Description
            style={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
              width: "180px"
            }}
          >
            {job.jobTitle}
          </Card.Description>
        </Card.Content>
      </Card>
    </>
  );
}
