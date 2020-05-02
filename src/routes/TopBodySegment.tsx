import React from "react";
import Styled from "styled-components";
import line from "../images/Line.png";
import time from "../images/time.png";
import icon from "../images/save-this-job-icon.png";
import { Button, Grid, Header, Image, Segment } from "semantic-ui-react";

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

function TopBodySegment() {
  return (
    <StyledBodySegment vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <StyledHeaderAsH3 as="h3">
              <StyledIcon alt="icon" src={icon} /> Problem
            </StyledHeaderAsH3>
            <StyledParagraph>
              Job searchers, already stressed, can't keep track of various
              postings on various sites. Bookmarking and spreadsheets are just
              making the situation overwhelming.
            </StyledParagraph>
            <StyledHeaderAsH3 as="h3">
              <StyledIcon alt="icon" src={icon} /> Solution
            </StyledHeaderAsH3>
            <StyledParagraph>
              A Chrome extension that lets you grab and save job postings with a
              rating of how interested you are in the job saving you time to
              continue your job search.
            </StyledParagraph>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <StyledTimeImg
              bordered
              rounded
              size="large"
              src={time}
              data-testid="time"
            />
            <Image alt="icon" src={line} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center"></Grid.Column>
        </Grid.Row>
      </Grid>
    </StyledBodySegment>
  );
}

export default TopBodySegment;
