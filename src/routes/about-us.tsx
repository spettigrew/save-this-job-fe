import React from "react";
import Styled from "styled-components";
import { connect } from "react-redux";
import cta from "../images/Group 1.png";
import line from "../images/Line.png";
import icon from "../images/save-this-job-icon.png";
import Footer from "./footer";
import {
  Button,
  Container,
  Grid,
  Header,
  Image,
  Segment
} from "semantic-ui-react";

const StyledBackground = Styled.div`
  background: #F3F8F9
`;
const StyledContainer = Styled(Container)({
  height: "72vh"
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
const StyledLogo = Styled.img`
  font-size: 4em;
  margin-bottom: 0;
  padding-top: 2em;
`;
const LineImg = Styled.img`
  margin-bottom: 4em
`;
const StyledImg = Styled(Image)({
  marginBottom: "1.5em"
});
const StyledButton = Styled(Button)({
  background: "#08A6C9 !important",
  color: "#ffff !important"
});

function AboutUs(props) {
  return (
    <div>
      {!props.loading && (
        <StyledBackground>
          <StyledContainer text textAlign="center">
            <StyledLogo src={cta} alt="logo" />
            <Header as="h2" content="About the Creators of 'Save this Job'" />
            <LineImg alt="icon" src={line} />
            <Grid.Row>
              <Grid.Column floated="right" width={2}></Grid.Column>
            </Grid.Row>
          </StyledContainer>
          <Footer />
        </StyledBackground>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    loading: state.loading,
    jobs: state.jobs
  };
}

export default connect(mapStateToProps, null)(AboutUs);
