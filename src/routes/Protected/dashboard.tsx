import React, { useState, useEffect } from "react";
import store from "store";
import { useOktaAuth } from "okta-react-bug-fix";
import { Redirect } from "react-router-dom";
import api from "../../utils/api";
import { DashCard } from "./card";
import Styled from "styled-components";
import {
  Container,
  Grid,
  Header,
  List,
  Segment,
  Loader,
  Dimmer,
  Image
} from "semantic-ui-react";

const StyledHeader = Styled(Header)({
  paddingTop: "100px",
  marginLeft: "5%"
});

const StyledBackGround = Styled.div`
  background: #F3F8F9;
`;

const StyledSegment = Styled(Segment)({
  padding: "5em 0em !important",
  background: "#08A6C9 !important",
  marginTop: "10em !important"
});

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // This is used for the purpose of the chrome extension to authenticate users once they login
  const setTokenForExtension = () => {
    const token = store.get("okta-token-storage").accessToken.accessToken;
    localStorage.setItem("token", token);
  };

  const removeJob = async jobId => {
    const response = await api().delete(`/users/removeJob/${jobId}`);
    console.log("Response", response);
    if (response.status === 200) {
      const filter = jobs.filter(job => job.id !== jobId);
      return setJobs(filter);
    }

    if (response.toString() === "Jwt is expired") {
      return <Redirect to="/login" />;
    }
  };

  useEffect(() => {
    setTokenForExtension();
    api()
      .get("/users/jobs")
      .then(res => {
        setJobs(res.data);
        setLoading(false);
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const Loading = () => {
    if (loading) {
      return (
        <Loader active inline="centered" size="large">
          Loading
        </Loader>
      );
    } else {
      return (
        <div>
          <Grid stackable container columns="equal">
            <Grid.Row stretched>
              {jobs.length > 0 ? (
                jobs.map((job, index) => (
                  <DashCard key={index} job={job} removeJob={removeJob} />
                ))
              ) : (
                <Header as="h2">
                  You currently have no jobs saved to your account.
                </Header>
              )}
            </Grid.Row>
          </Grid>
        </div>
      );
    }
  };

  return (
    <StyledBackGround>
      <StyledHeader as="h3">{`Welcome back, ${
        store.get("okta-token-storage").idToken.claims.name
      }`}</StyledHeader>

      <Loading />

      <StyledSegment inverted vertical>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="About" />
                <List link inverted>
                  <List.Item as="a">Sitemap</List.Item>
                  <List.Item as="a">Contact Us</List.Item>
                  <List.Item as="a">Religious Ceremonies</List.Item>
                  <List.Item as="a">Gazebo Plans</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Services" />
                <List link inverted>
                  <List.Item as="a">Banana Pre-Order</List.Item>
                  <List.Item as="a">DNA FAQ</List.Item>
                  <List.Item as="a">How To Access</List.Item>
                  <List.Item as="a">Favorite X-Men</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as="h4" inverted>
                  Footer Header
                </Header>
                <p>
                  Extra space for a call to action inside the footer that could
                  help re-engage users.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </StyledSegment>
    </StyledBackGround>
  );
};

export default Dashboard;
