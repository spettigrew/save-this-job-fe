import React, { useEffect } from "react";
import Styled from "styled-components";
import { connect } from "react-redux";
import { Segment, Container, Grid, Header, List } from "semantic-ui-react";
const StyledFooter = Styled(Segment)`
  padding: 4em 0em !important;
  background: #08A6C9 !important;
  width:100%;
  position:relative;
  bottom:-100px;
  margin-top:4em;
  
  
`;

function Footer(props) {
  function calculateMainContentHeight() {
    if (document.querySelector("#footer") && props.jobs) {
      const mainContent = document.querySelector<HTMLElement>("#content");
      const footerContent = document.querySelector<HTMLElement>("#footer");
      if (mainContent.clientHeight < window.innerHeight) {
        footerContent.style.position = "absolute";
        footerContent.style.bottom = "0";
        footerContent.style.marginTop = "4em";
      } else {
        footerContent.style.position = "relative";
        footerContent.style.bottom = "0";
        footerContent.style.marginTop = "4em";
      }
    }
  }
  useEffect(() => {
    calculateMainContentHeight();
  }, [props.loading]);
  window.addEventListener("resize", function(event) {
    calculateMainContentHeight();
  });

  return (
    <>
      {!props.loading && (
        <StyledFooter id="footer" inverted vertical>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="About" />
                  <List link inverted>
                    <List.Item as="a">Sitemap</List.Item>
                    <List.Item as="a">Contact Us</List.Item>
                    <List.Item
                      as="a"
                      href="https://chrome.google.com/webstore/detail/hejmehomfdabmjbhlpajmhcjaoichkgl"
                      target="_blank"
                    >
                      Chrome Extension
                    </List.Item>
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
      )}
    </>
  );
}
function mapStateToProps(state) {
  return {
    loading: state.loading,
    jobs: state.jobs
  };
}
export default connect(mapStateToProps, null)(Footer);
