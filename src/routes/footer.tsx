import React, { useEffect } from "react";
import Styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
                    {/* <List.Item as="a">Sitemap</List.Item> */}
                    <List.Item as={Link} to="/about">
                      About Us
                    </List.Item>
                    <List.Item
                      as="a"
                      href="https://chrome.google.com/webstore/detail/hejmehomfdabmjbhlpajmhcjaoichkgl"
                      target="_blank"
                    >
                      Chrome Extension
                    </List.Item>
                    <List.Item
                      as="a"
                      href="https://www.diynetwork.com/how-to/outdoors/structures/pergola-and-gazebo-design-ideas-pictures"
                      target="_blank"
                    >
                      Gazebo Plans
                    </List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="Services" />
                  <List link inverted>
                    <List.Item
                      as="a"
                      href="https://www.chiquita.com"
                      target="_blank"
                    >
                      Banana Pre-Order
                    </List.Item>
                    <List.Item
                      as="a"
                      href="https://www.ducksters.com/science/quiz/dna_questions.php"
                      target="_blank"
                    >
                      DNA FAQ
                    </List.Item>
                    <List.Item
                      as="a"
                      href="https://www.marvel.com/teams-and-groups/x-men"
                      target="_blank"
                    >
                      Favorite X-Men
                    </List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as="h4" inverted>
                    Chrome Extensions
                  </Header>
                  <List.Item
                    as="a"
                    href="https://chrome.google.com/webstore"
                    target="_blank"
                  >
                    Chrome Web Store
                  </List.Item>
                  <p>
                    Check out Google Web Store for this and other cool Chrome
                    extensions for your desktop or laptop. Happy Job Hunting!
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
