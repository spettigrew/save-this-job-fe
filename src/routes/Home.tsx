import React from "react";
import { Grid, Image, Segment, Icon, Header, Button } from "semantic-ui-react";
import time from "../images/time.png";
import cta from "../images/homeCTA.png";
import line from "../images/Line.png";

function Home() {
  // this is where we will display information related to the app
  return (
    <Grid
      centered={true}
      divided="vertically"
      style={{ marginBottom: "100px" }}
    >
      <Grid.Row columns={1} style={{ marginTop: "50px" }}>
        <Grid.Column>
          <Image style={{ marginLeft: "100px" }} size="massive" src={cta} />
        </Grid.Column>
        <Grid.Column>
          <Image size="massive" src={time} />
        </Grid.Column>

        <p>Pellentesque habitant morbi tristique senectus.</p>

        <Image style={{ marginLeft: "50px" }} size="big" src={line} />
      </Grid.Row>

      <Grid.Row columns={2} style={{ marginTop: "50px" }}>
        <Grid.Column width="8">
          <Icon name="map" style={{ color: "#E94837" }} size="massive" />
        </Grid.Column>
        <Grid.Column width="6">
          <p style={{ padding: "50px 5px" }}>
            Lorem ipsum lorem lorem ipsum ip some get some ipsum
          </p>
        </Grid.Column>
        <Grid.Column width="8">
          <p style={{ padding: "50px 5px" }}>
            Lorem ipsum lorem lorem ipsum ip some get some ipsum
          </p>
        </Grid.Column>
        <Grid.Column width="6">
          <Icon name="map" style={{ color: "#E94837" }} size="massive" />
        </Grid.Column>
        <Grid.Column width="8">
          <Icon name="map" style={{ color: "#E94837" }} size="massive" />
        </Grid.Column>
        <Grid.Column width="6">
          <p style={{ padding: "50px 5px" }}>
            Lorem ipsum lorem lorem ipsum ip some get some ipsum
          </p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Header as="h1" style={{ color: "teal", textAlign: "center" }}>
            {" "}
            Lorem Ipsum
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Button color="teal" animated="fade" style={{ fontSize: "1.2rem" }}>
            <Button.Content visible>Get Started </Button.Content>
            <Button.Content hidden>Sign Me Up</Button.Content>
          </Button>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column width="10">
          <p>testing lorem lorem lorem it sa some a lorema</p>
        </Grid.Column>

        <Grid.Column>
          <Header as="h1" style={{ color: "teal", textAlign: "center" }}>
            {" "}
            Get the Chrome extension
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Button color="teal" animated="fade" style={{ fontSize: "1.2rem" }}>
            <Button.Content visible>Chrome Extension</Button.Content>
            <Button.Content hidden>Install </Button.Content>
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Home;
