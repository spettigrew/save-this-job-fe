import React, { useState } from "react";
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
  List,
  Segment
} from "semantic-ui-react";
import { data1, data2 } from "../utils/about-data";
import AboutCard from "./AboutCard";

const StyledBackground = Styled.div`
  background: #F3F8F9;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin: 0 auto;
  padding-top: 70px;
  text-align: center;
`;
// const StyledContainer = Styled(Container)({
//   height: "100vh",
// });
// const StyledBodySegment = Styled(Segment)({
//   padding: "8em 0em",
// });
// const StyledHeaderAsH3 = Styled(Header)({
//   fontSize: "2em",
//   paddingTop: "30px",
// });
// const StyledIcon = Styled.img`
//     width: 25px;
//     height: 25px;
//   `;
// const StyledLogo = Styled.img`
//   font-size: 4em;
//   margin-bottom: 0;
//   padding-top: 2em;
// `;
// const LineImg = Styled.img`
//   margin-bottom: 4em;
// `;
// const StyledImg = Styled(Image)({
//   marginBottom: "1.5em",
// });
// const StyledButton = Styled(Button)({
//   background: "#08A6C9 !important",
//   color: "#ffff !important",
// });

function AboutUs(props) {
  const [team1] = useState(data1);
  const [team2] = useState(data2);
  return (
    <>
      <h1 style={{ marginTop: "100px", textAlign: "center", fontSize: "3rem" }}>
        Meet the Team!
      </h1>
      <StyledBackground>
        {!props.loading && (
          <Grid centered columns="equal" style={{ textAlign: "center" }}>
            <Grid.Row centered>
              {team1.map(bud => {
                return (
                  <Grid.Column row="ui segment">
                    <AboutCard
                      image={bud.image}
                      linkdin={bud.linkdin}
                      github={bud.github}
                      name={bud.name}
                      title={bud.title}
                    />
                  </Grid.Column>
                );
              })}
            </Grid.Row>

            <Grid.Row centered>
              {team2.map(bud => {
                return (
                  <Grid.Column row="ui segment">
                    <AboutCard
                      image={bud.image}
                      linkdin={bud.linkdin}
                      github={bud.github}
                      name={bud.name}
                      title={bud.title}
                    />
                  </Grid.Column>
                );
              })}
            </Grid.Row>
          </Grid>
        )}
      </StyledBackground>
      <Footer />
    </>
  );
}

function mapStateToProps(state) {
  return {
    loading: state.loading,
    jobs: state.jobs
  };
}

export default connect(mapStateToProps, null)(AboutUs);
