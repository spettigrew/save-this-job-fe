import React, { useState, useEffect } from "react";
import store from "store";
import authWithAxios from "../../utils/authWithAxios";
import { DashCard } from "./card";
import { Container, Grid, Header, List, Segment } from "semantic-ui-react";

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);

  // This is used for the purpose of the chrome extension to authenticate users once they login
  const setTokenForExtension = () => {
    const token = store.get("okta-token-storage").accessToken.accessToken;
    localStorage.setItem("token", token);
  };

  const removeJob = async jobId => {
    const response = await authWithAxios().delete(
      `http://localhost:8080/users/removeJob/${jobId}`
    );
    if (response.status === 200) {
      const filter = jobs.filter(job => job.id !== jobId);
      setJobs(filter);
    } else {
      console.log(response);
    }
  };

  useEffect(() => {
    setTokenForExtension();
    authWithAxios()
      .get("/users/jobs")
      .then(res => {
        setJobs(res.data);
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ background: "#F3F8F9" }}>
      <h1 style={{ paddingTop: "100px", marginLeft: "5%" }}>{`Welcome back, ${
        store.get("okta-token-storage").idToken.claims.name
      }`}</h1>
      <div
      // style={{
      //   maxWidth: "1350px",
      //   margin: "15px auto",
      //   display: "flex",
      //   flexWrap: "wrap",
      //   flexDirection: "row",
      //   justifyContent: "start",
      //   paddingTop: "50px",
      //   paddingBottom: "100px"
      // }}
      >
        <Grid stackable container columns="equal">
          <Grid.Row stretched>
            {jobs.length > 0 ? (
              jobs.map((job, index) => (
                <DashCard key={index} job={job} removeJob={removeJob} />
              ))
            ) : (
              <div>You currently have no jobs saved to your account.</div>
            )}
          </Grid.Row>
        </Grid>
      </div>
      <Segment
        inverted
        vertical
        style={{ padding: "5em 0em", background: "#08A6C9", marginTop: "5em" }}
      >
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
      </Segment>
    </div>
  );
};

export default Dashboard;
