import React from "react";
import Styled from "styled-components";
import icon from "../images/save-this-job-icon.png";
import { Header, Segment, Grid } from "semantic-ui-react";

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

const StyledMiddleBodySegment = Styled(Segment)({
  padding: "0em"
});

const StyledGridColumn = Styled(Grid.Column)({
  paddingBottom: "5em",
  paddingTop: "5em"
});

function MiddleBodySegment() {
  return (
    <StyledMiddleBodySegment vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <StyledGridColumn>
            <StyledHeaderAsH3 as="h3">
              <StyledIcon alt="icon" src={icon} /> Chrome Extension
            </StyledHeaderAsH3>
            <StyledParagraph>
              A Chrome extension is used for your laptop or desktop which allows
              you to save job postings of interest.
            </StyledParagraph>
          </StyledGridColumn>
          <StyledGridColumn>
            <StyledHeaderAsH3 as="h3">
              <StyledIcon alt="icon" src={icon} /> Get the extension
            </StyledHeaderAsH3>
            <StyledParagraph>
              This extension is available for download in the chrome web store.
              See below or click{" "}
              <a
                data-testid="chromeLink"
                href="https://chrome.google.com/webstore/detail/hejmehomfdabmjbhlpajmhcjaoichkgl"
              >
                here
              </a>{" "}
              to get started.
            </StyledParagraph>
          </StyledGridColumn>
        </Grid.Row>
      </Grid>
    </StyledMiddleBodySegment>
  );
}

export default MiddleBodySegment;
