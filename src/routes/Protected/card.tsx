import React from "react";
import { Card, Image, Icon, Grid } from "semantic-ui-react";
import PostDetails from "./Modal/PostDetails";
import blue from "../../images/icon.blue.png";

export default function DashCard(props) {
  const job = props.job;

  const imgSrc = job.logo || blue;
  return (
    <>
      <Card
        raised
        style={{
          margin: "50px auto 0",
          width: "20%",
          minWidth: "200px",
          maxWidth: "300px"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between"
          }}
        >
          <Image
            src={imgSrc}
            ui={false}
            style={{
              height: "25px",
              maxWidth: "75%",
              paddingLeft: "10px",
              marginTop: "10px"
            }}
          />
          <PostDetails imgSrc={imgSrc} jobId={job.id} job={job} />
        </div>
        <Card.Content>
          <Card.Header style={{ textOverflow: "ellipsis" }}>
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
        <Card.Content
          extra={true}
          style={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%"
            }}
          >
            <a href={job.urlText} target="_blank">
              <Icon name="thumbtack" />
              View Post
            </a>
          </div>
        </Card.Content>
      </Card>
    </>
  );
}
