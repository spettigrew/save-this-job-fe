import React from 'react'
import Styled from 'styled-components'
import icon from "../images/save-this-job-icon.png";
import gif from "../images/kaban.gif"
import cardView from "../images/cardView.png"
import {
  Header,
  Segment,
  Button,
  Divider,
  Container,
} from "semantic-ui-react";

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

const StyledDivider = Styled(Divider)({
  margin: "3em 0em",
  marginTop: "5em !important"
});


function BottomBodySection() {
  return (
    <StyledBodySegment vertical>
      <Container text>
        <StyledHeaderAsH3 as="h3">
          <StyledIcon alt="icon" src={icon} /> Kanban Board 
            </StyledHeaderAsH3>
        <img src={gif} alt="kaban board" style={{ width: "100%"}}/>
        <StyledParagraph>
          Visualize and categorize your job search in a kanban board. See your saved
          jobs that are organized in categories such as interested in, applied, interviewing and offers all in one view. It also allows you to add notes and tasks, tag or make deadlines for certain jobs, ultimately saving you time to finalize your job hunt.
            </StyledParagraph>
        <StyledButton
          data-testid="login-button"
          animated="fade"
          size="huge"
          href={`${window.location.origin}/login`}
        >
          <Button.Content visible>Get Started</Button.Content>
          <Button.Content hidden>Sign-Up Now</Button.Content>
        </StyledButton>

        <StyledDivider horizontal>
          <StyledIcon alt="icon" src={icon} />
        </StyledDivider>
        <StyledHeaderAsH3 as="h3">
          <StyledIcon alt="icon" src={icon} /> Save and organize job listings
            </StyledHeaderAsH3>
            <img src={cardView} alt="job card" style={{ width: "100%"}}/>
        <StyledParagraph>
          A lack of central organization for job postings can be overwhelming to keep track of relevant jobs. <strong>Save This Job</strong> lets you copy and save job posting information and categorize them in how
          interested or where you are in your job search.
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
          <StyledIcon alt="icon" src={icon} /> Map View
            </StyledHeaderAsH3>
        <img src={gif} alt="kaban board" style={{ width: "100%"}}/>
        <StyledParagraph>
          Check out our map view for your saved jobs! A pin will mark the city and state of all of the jobs that you have saved to your kanban board.
            </StyledParagraph>
      </Container>
    </StyledBodySegment>
  )
}

export default BottomBodySection
