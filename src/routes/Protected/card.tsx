import React from "react";
import { Card, Image, Icon, Grid } from "semantic-ui-react";
import Remove from "./Remove";

export const DashCard = ({ job, removeJob }) => {
  return (
    <>
      <Grid.Column width={5}>
        <Card raised style={{ marginTop: "50px" }}>
          <Image src={job.logo} wrapped={true} ui={false} />
          <Card.Content>
            <Card.Header>
              {job.companyUrl ? (
                <a href={job.companyUrl}>{job.companyTitle}</a>
              ) : (
                job.companyTitle
              )}
            </Card.Header>
            <Card.Description>{job.jobTitle}</Card.Description>
          </Card.Content>
          <Card.Content
            extra={true}
            style={{
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <a href={job.url}>
              <Icon name="thumbtack" />
              Go to Job Post
            </a>
            <Remove removeJob={removeJob} id={job.id} />
          </Card.Content>
        </Card>
      </Grid.Column>
    </>
  );
};
