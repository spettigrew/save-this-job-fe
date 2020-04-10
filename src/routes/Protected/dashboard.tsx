import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getUser } from "../../redux/actions/index";
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

const Dashboard = props => {
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
    props.getUser();
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
        <div style={{ minHeight: "50vh" }}>
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
      <StyledHeader as="h3">{`Welcome back, ${props.user?.firstName}`}</StyledHeader>

      <Loading />
    </StyledBackGround>
  );
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

const mapDispatchToProps = {
  getUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
