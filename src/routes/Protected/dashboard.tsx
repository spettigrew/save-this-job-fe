import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getUser, getJobs, getCurrentJob } from "../../redux/actions/index";
import store from "store";
import DashCard from "./card";
import Footer from "../footer";
import Loading from "./Loading";
import Styled from "styled-components";
import Message from "../../UIElements/Messages";
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
    setTokenForExtension();
    props.getUser();
    props.getJobs();
  }, []);

  return (
    <StyledBackGround>
      <StyledHeader as="h3">
        {`Welcome back, ${props.user?.firstName}`}
      </StyledHeader>
      {/* {props.error && (
        <Message type={"Error"} visible={true} message={props.error.message} />
      )} */}
      {props.success?.state && props.success?.type == "Deleted" && (
        <Message
          type={"Success"}
          visible={true}
          message={"Successfully Deleted Job"}
        />
      )}

      {props.loading && <Loading />}
      <div>
        <Grid stackable container columns="equal">
          <Grid.Row stretched>
            {props.jobs &&
              props.jobs.map((job, index) => (
                <DashCard key={index} job={job} />
              ))}
            {!props.loading && props.jobs && props.jobs.length < 1 && (
              <Header as="h2">
                You currently have no jobs saved to your account.
              </Header>
            )}
          </Grid.Row>
        </Grid>
      </div>
      <Footer />
    </StyledBackGround>
  );
};

function mapStateToProps(state) {
  return {
    user: state.user,
    jobs: state.jobs,
    loading: state.loading,
    error: state.error,
    success: state.success
  };
}

const mapDispatchToProps = {
  getUser,
  getJobs,
  getCurrentJob
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Dashboard)
);
