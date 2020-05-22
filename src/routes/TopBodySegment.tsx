import React from "react";
import Styled from "styled-components";
import line from "../images/Line.png";
import time from "../images/time.png";
import icon from "../images/save-this-job-icon.png";
import { Button, Grid, Header, Image, Segment } from "semantic-ui-react";

const StyledBodySegment = Styled(Segment)({
  marginTop: "200px, !important"
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
              <StyledIcon alt="icon" src={icon} /> Save This Job
            </StyledHeaderAsH3>
            <StyledParagraph>
              'Save This Job' is a Chrome extension that allows users to save
              job listings with a kanban board. A kanban board allows you to
              organize and categorize jobs to easily view, update, create notes
              or tasks for which jobs you saved.
            </StyledParagraph>
            <StyledHeaderAsH3 as="h3">
              <StyledIcon alt="icon" src={icon} /> Job Hunting = Stress
            </StyledHeaderAsH3>
            <StyledParagraph>
              Job searching is already stressful and it can be difficult to keep
              track of postings on various sites. Bookmarking, spreadsheets and
              constant reminders can become overwhelming.
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
