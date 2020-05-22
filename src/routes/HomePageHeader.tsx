import React from "react";
import Styled from "styled-components";
import cta from "../images/Group 1.png";
import line from "../images/Line.png";
import { Button, Container, Header } from "semantic-ui-react";

const StyledBackground = Styled.div`
  background: #F3F8F9
`;

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
  color: "#ffff !important",
  width: "40%"
});

function HomePageHeader() {
  return (
    <div>
      <StyledBackground>
        <Container text textAlign="center">
          <StyledLogo src={cta} alt="logo" />
          <Header
            as="h2"
            content="Keep your job search organized and all in one place"
          />
          <LineImg alt="icon" src={line} />

          <StyledButton
            data-testid="main-button"
            animated="fade"
            size="huge"
            href="https://chrome.google.com/webstore/detail/hejmehomfdabmjbhlpajmhcjaoichkgl"
          >
            <Button.Content visible>Get Started</Button.Content>
            <Button.Content hidden>Install Extension</Button.Content>
          </StyledButton>
        </Container>
      </StyledBackground>
    </div>
  );
}

export default HomePageHeader;
