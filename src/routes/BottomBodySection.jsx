import React from 'react'
import Styled from 'styled-components'
import icon from "../images/save-this-job-icon.png";
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
          many applications, interviews and offers youâ€™ve received in one
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
  )
}

export default BottomBodySection
