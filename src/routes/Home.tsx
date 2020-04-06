import React from "react";
import { useOktaAuth } from "okta-react-bug-fix";
import { Redirect } from "react-router-dom";
import time from "../images/time.png";
import cta from "../images/Group 1.png";
import line from "../images/Line.png";
import icon from "../images/save-this-job-icon.png";
import Styled from "styled-components";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment
} from "semantic-ui-react";

const StyledBackground = Styled.div`
  background: #F3F8F9
`;
const StyledContainer = Styled(Container)({
  height: "72vh"
});

const StyledLogo = Styled.img`
  font-size: 4em;
  margin-bottom: 0;
  padding-top: 2em;
`;
const LineImg = Styled.img`
  margin-bottom: 4em
`;
const StyledButton = Styled(Button)({
  background: "#08A6C9 !important",
  color: "#ffff !important"
});

const StyledBodySegment = Styled(Segment)({
  padding: "8em 0em"
});

const StyledHeaderAsH3 = Styled(Header)({
  fontSize: "2em",
  paddingTop: "30px"
});

const StyledIcon = Styled.img`
  width: 25px;
  height: 25px;
`;
const StyledParagraph = Styled.p`
  font-size: 1.33em;
`;
const StyledTimeImg = Styled(Image)({
  marginBottom: "1.5em"
});

const StyledMiddleBodySegment = Styled(Segment)({
  padding: "0em"
});

const StyledGridColumn = Styled(Grid.Column)({
  paddingBottom: "5em",
  paddingTop: "5em"
});

const StyledDivider = Styled(Divider)({
  margin: "3em 0em",
  marginTop: "5em !important"
});

const StyledFooter = Styled(Segment)({
  padding: "5em 0em !important",
  marginTop: "70px !important",
  background: "#08A6C9 !important"
});

function Home() {
  const { authState } = useOktaAuth();

  if (authState.isPending) {
    return <div>Loading...</div>;
  }

  const HomePageHeader = () => {
    return (
      <StyledBackground>
        <StyledContainer text textAlign="center">
          <StyledLogo src={cta} alt="logo" />
          <Header
            as="h2"
            content="Keep your job search organized and all in one place"
          />
          <LineImg alt="icon" src={line} />

          <StyledButton
            animated="fade"
            size="huge"
            href="https://chrome.google.com/webstore/detail/hejmehomfdabmjbhlpajmhcjaoichkgl"
          >
            <Button.Content visible>Get Started</Button.Content>
            <Button.Content hidden>Install Extension</Button.Content>
          </StyledButton>
        </StyledContainer>
      </StyledBackground>
    );
  };

  const HomePageBody = () => {
    return (
      <div>
        <StyledBodySegment vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                <StyledHeaderAsH3 as="h3">
                  <StyledIcon alt="icon" src={icon} /> Problem
                </StyledHeaderAsH3>
                <StyledParagraph>
                  Job searchers, already stressed, can't keep track of various
                  postings on various sites. Bookmarking and spreadsheets are
                  just making the situation overwhelming.
                </StyledParagraph>
                <StyledHeaderAsH3 as="h3">
                  <StyledIcon alt="icon" src={icon} /> Solution
                </StyledHeaderAsH3>
                <StyledParagraph>
                  A Chrome extension that lets you grab and save job postings
                  with a rating of how interested you are in the job saving you
                  time to continue your job search.
                </StyledParagraph>
              </Grid.Column>
              <Grid.Column floated="right" width={6}>
                <StyledTimeImg bordered rounded size="large" src={time} />
                <Image alt="icon" src={line} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign="center"></Grid.Column>
            </Grid.Row>
          </Grid>
        </StyledBodySegment>

        <StyledMiddleBodySegment vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <StyledGridColumn>
                <StyledHeaderAsH3 as="h3">
                  <StyledIcon alt="icon" src={icon} /> "What is Save This Job?"
                </StyledHeaderAsH3>
                <StyledParagraph>
                  Save This Job is a Chrome extension that allows users to save
                  and rate job listings with a front-end dashboard to easily
                  view/update jobs that you saved!
                </StyledParagraph>
              </StyledGridColumn>
              <StyledGridColumn>
                <StyledHeaderAsH3 as="h3">
                  <StyledIcon alt="icon" src={icon} /> "How do I get the
                  extension?"
                </StyledHeaderAsH3>
                <StyledParagraph>
                  The extension is available for download in the chrome web
                  store. Click{" "}
                  <a href="https://chrome.google.com/webstore/detail/hejmehomfdabmjbhlpajmhcjaoichkgl">
                    here
                  </a>{" "}
                  to get started.
                </StyledParagraph>
              </StyledGridColumn>
            </Grid.Row>
          </Grid>
        </StyledMiddleBodySegment>

        <StyledBodySegment vertical>
          <Container text>
            <StyledHeaderAsH3 as="h3">
              <StyledIcon alt="icon" src={icon} /> Save and Rate Job Listings
            </StyledHeaderAsH3>
            <StyledParagraph>
              Lack of central organization for job postings causes it to be
              overwhelming to keep track of relevant job postings, adds
              unnecessary stress to an already stressful process. Save This Job
              lets you grab and save job postings with a rating of how
              interested you are in the job.
            </StyledParagraph>
            <StyledButton
              animated="fade"
              size="huge"
              href="https://chrome.google.com/webstore/detail/hejmehomfdabmjbhlpajmhcjaoichkgl"
            >
              <Button.Content visible>Chrome Extension</Button.Content>
              <Button.Content hidden>Install</Button.Content>
            </StyledButton>

            <StyledDivider horizontal>
              <StyledIcon alt="icon" src={icon} />
            </StyledDivider>

            <StyledHeaderAsH3 as="h3">
              <StyledIcon alt="icon" src={icon} /> Kanban
            </StyledHeaderAsH3>
            <StyledParagraph>
              Visualize the state of your job search in a kanban board. See how
              many applications, interviews and offers you’ve received in one
              view.
            </StyledParagraph>
            <StyledButton
              animated="fade"
              size="huge"
              href={`${window.location.origin}/login`}
            >
              <Button.Content visible>Get Started</Button.Content>
              <Button.Content hidden>Sign-Up Now</Button.Content>
            </StyledButton>
          </Container>
        </StyledBodySegment>
      </div>
    );
  };

  const HomePageFooter = () => {
    return (
      <div>
        <StyledFooter inverted vertical>
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
                    Extra space for a call to action inside the footer that
                    could help re-engage users.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </StyledFooter>
      </div>
    );
  };

  return (
    <div>
      {!authState.isAuthenticated ? (
        <div>
          <HomePageHeader />
          <HomePageBody />
          <HomePageFooter />
        </div>
      ) : (
        <Redirect to="/dashboard" />
      )}
    </div>
  );
}

export default Home;
