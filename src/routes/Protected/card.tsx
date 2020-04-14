import React from "react";
import { Card, Image, Icon, Grid } from "semantic-ui-react";
import Remove from "./Remove";
import PostDetails from "./PostDetails";
import blue from "../../images/icon.blue.png";
import yellow from "../../images/icon-yellow.png";
import pink from "../../images/icon-pink.png";
import orange from "../../images/icon-orange.png";
import green from "../../images/icon-green.png";
import drkBlue from "../../images/icon-drkBlue.png";

export const DashCard = ({ job, removeJob }) => {
  const randomIcon = () => {
    const iconArray = [blue, yellow, pink, orange, green, drkBlue];

    let randomNumber = Math.floor(Math.random() * iconArray.length);
    return iconArray[randomNumber];
  };

  const imgSrc = job.logo || randomIcon();
  return (
    <>
      <Grid.Column width={4}>
        <Card raised style={{ marginTop: "50px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between"
            }}
          >
            <Image src={imgSrc} ui={false} style={{ width: "50%" }} />
            <Remove removeJob={removeJob} id={job.id} />
          </div>
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
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%"
              }}
            >
              <a href={job.url}>
                <Icon name="thumbtack" />
                View Post
              </a>
              <PostDetails job={job} imgSrc={imgSrc} />
            </div>
          </Card.Content>
        </Card>
      </Grid.Column>
    </>
  );
};
