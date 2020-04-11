import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getUser, getJobs, deleteJob } from "../../redux/actions/index";
import store from "store";
import { useOktaAuth } from "okta-react-bug-fix";
import { Redirect } from "react-router-dom";
import api from "../../utils/api";
import { DashCard } from "./card";
import Loading from "./Loading";
import Styled from "styled-components";
import {
  Container,
  Grid,
  Header,
  List,
  Segment,
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
  // This is used for the purpose of the chrome extension to authenticate users once they login
  const setTokenForExtension = () => {
    const token = store.get("okta-token-storage").accessToken.accessToken;
    localStorage.setItem("token", token);
  };

  useEffect(() => {
    props.getUser();
    props.getJobs();
    setTokenForExtension();
  }, []);

  useEffect(() => {
    if (props) {
      console.log(props.user);
    }
  }, [props]);
  return (
    <StyledBackGround>
      <StyledHeader as="h3">
        {`Welcome back, ${props.user?.firstName}`}{" "}
      </StyledHeader>

      {props.loading ? (
        <Loading />
      ) : (
        <div style={{ minHeight: "50vh" }}>
          <Grid stackable container columns="equal">
            <Grid.Row stretched>
              <Header as="h3">{props.error}</Header>
              {props.jobs ? (
                props.jobs.map((job, index) => (
                  <DashCard key={index} job={job} removeJob={props.deleteJob} />
                ))
              ) : (
                <Header as="h2">
                  You currently have no jobs saved to your account.
                </Header>
              )}
            </Grid.Row>
          </Grid>
        </div>
      )}
    </StyledBackGround>
  );
};

function mapStateToProps(state) {
  return {
    user: state.user,
    jobs: state.jobs,
    loading: state.loading,
    error: state.error
  };
}

const mapDispatchToProps = {
  getUser,
  getJobs,
  deleteJob
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
