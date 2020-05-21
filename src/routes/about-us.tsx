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
import { data } from "../utils/about-data";
import AboutCard from "./AboutCard";

const StyledBackground = Styled.div`
  background: #F3F8F9;
  width: 50%;
  margin: "0 auto";
  padding-top: 100px;
`;
const StyledContainer = Styled(Container)({
  height: "100vh"
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
  margin-bottom: 4em;
`;
const StyledImg = Styled(Image)({
  marginBottom: "1.5em"
});
const StyledButton = Styled(Button)({
  background: "#08A6C9 !important",
  color: "#ffff !important"
});

function AboutUs(props) {
  const [team, setTeam] = useState(data);
  return (
    <div>
      {!props.loading && (
        <StyledBackground>
          <Grid relaxed columns={3} style={{ margin: "0 auto" }}>
            {team.map(bud => {
              return (
                <Grid.Column row="ui segment">
                  <AboutCard
                    image={bud.image}
                    linkdin={bud.linkdin}
                    github={bud.github}
                    name={bud.name}
                  />
                </Grid.Column>
              );
            })}
          </Grid>

          {/* <StyledContainer text textAlign="center">
            <StyledLogo src={cta} alt="logo" />
            <Header as="h2" content="About the Creators of 'Save this Job'" />
            <LineImg alt="icon" src={line} />

            <Segment top="ui four column grid">
              <Grid.Column column="column">
                <Grid row="ui segment">
                  <Image src="https://media-exp1.licdn.com/dms/image/C5603AQGbl87bpyEqGA/profile-displayphoto-shrink_200_200/0?e=1595462400&v=beta&t=9hLqH5sY-P0SmVlacjm0QGcHnlnw2uuZBQSqP71J-ok"></Image>
                  <List.Item
                    as="a"
                    href="https://www.linkedin.com/in/ken-boelter-4282b5127"
                    target="blank"
                  >
                    <Image
                      src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca"
                      width="15"
                    ></Image>
                  </List.Item>
                  <List.Item
                    as="a"
                    href="https://github.com/krboelter"
                    target="blank"
                  >
                    <Image
                      src="https://github.com/favicon.ico"
                      width="15"
                    ></Image>
                  </List.Item>
                </Grid>
              </Grid.Column>
              <Grid.Column column="column">
                <Grid row="ui segment">
                  <Image src="https://media-exp1.licdn.com/dms/image/C4E03AQEyJTppbcZXww/profile-displayphoto-shrink_200_200/0?e=1595462400&v=beta&t=Ic5G3C0B6tQLvGweaZ4Y9WtfCwoFWkvnnu8FpTuzhzA"></Image>
                  <List.Item
                    as="a"
                    href="https://www.linkedin.com/in/kevin-carr-"
                    target="blank"
                  >
                    <Image
                      src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca"
                      width="15"
                    ></Image>
                  </List.Item>
                  <List.Item
                    as="a"
                    href="https://github.com/kevcarr11"
                    target="blank"
                  >
                    <Image
                      src="https://github.com/favicon.ico"
                      width="15"
                    ></Image>
                  </List.Item>
                </Grid>
              </Grid.Column>
              <Grid.Column column="column">
                <Grid row="ui segment">
                  <Image src="https://media-exp1.licdn.com/dms/image/C5603AQFYMViRgozPOQ/profile-displayphoto-shrink_200_200/0?e=1595462400&v=beta&t=gsHF5sqfaqqRoMbGXf5z4GH_01FReHhl2ZhGpk6kBUI"></Image>
                  <List.Item
                    as="a"
                    href="https://www.linkedin.com/in/rose-landroche"
                    target="blank"
                  >
                    <Image
                      src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca"
                      width="15"
                    ></Image>
                  </List.Item>
                  <List.Item
                    as="a"
                    href="https://github.com/roselandroche"
                    target="blank"
                  >
                    <Image
                      src="https://github.com/favicon.ico"
                      width="15"
                    ></Image>
                  </List.Item>
                </Grid>
              </Grid.Column>
              <Grid.Column column="column">
                <Grid row="ui segment">
                  <Image src="https://media-exp1.licdn.com/dms/image/C4E03AQGn_fRqfmdUaw/profile-displayphoto-shrink_200_200/0?e=1595462400&v=beta&t=zAtpoj5Y5IPsLL0CeM1tDhsdrRjW_bfPBNRQgLEMzE4"></Image>
                  <List.Item
                    as="a"
                    href="https://www.linkedin.com/in/roger-m-lee"
                    target="blank"
                  >
                    <Image
                      src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca"
                      width="15"
                    ></Image>
                  </List.Item>
                  <List.Item
                    as="a"
                    href="https://github.com/rm-lee"
                    target="blank"
                  >
                    <Image
                      src="https://github.com/favicon.ico"
                      width="15"
                    ></Image>
                  </List.Item>
                </Grid>
              </Grid.Column>
            </Segment>

            <Segment bottom="ui four column grid">
              <Grid.Column column="column">
                <Grid row="ui segment">
                  <Image src="https://media-exp1.licdn.com/dms/image/C4E03AQEQAPazPahyCw/profile-displayphoto-shrink_200_200/0?e=1595462400&v=beta&t=jmr3b88NdmaSdcXP1-qfDiWP-Z9WMrWw_neFrdkOAD8"></Image>
                  <List.Item
                    as="a"
                    href="https://www.linkedin.com/in/michelle-scott-920b05188"
                    target="blank"
                  >
                    <Image
                      src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca"
                      width="15"
                    ></Image>
                  </List.Item>
                  <List.Item
                    as="a"
                    href="https://github.com/scottmm374"
                    target="blank"
                  >
                    <Image
                      src="https://github.com/favicon.ico"
                      width="15"
                    ></Image>
                  </List.Item>
                </Grid>
              </Grid.Column>
              <Grid.Column column="column">
                <Grid row="ui segment">
                  <Image src="https://media-exp1.licdn.com/dms/image/C4E03AQHvNyeNdywpiw/profile-displayphoto-shrink_200_200/0?e=1595462400&v=beta&t=BlbrRnbHBOBGJKYGfxXCMAxMg1A9XA12g4KqiPcHwRU"></Image>
                  <List.Item
                    as="a"
                    href="https://www.linkedin.com/in/sara-pettigrew-42203218b"
                    target="blank"
                  >
                    <Image
                      src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca"
                      width="15"
                    ></Image>
                  </List.Item>
                  <List.Item
                    as="a"
                    href="https://github.com/spettigrew"
                    target="blank"
                  >
                    <Image
                      src="https://github.com/favicon.ico"
                      width="15"
                    ></Image>
                  </List.Item>
                </Grid>
              </Grid.Column>
              <Grid.Column column="column">
                <Grid row="ui segment">
                  <Image src="https://media-exp1.licdn.com/dms/image/C4E03AQFEgxT9zakdWA/profile-displayphoto-shrink_200_200/0?e=1595462400&v=beta&t=SWaQMqEtO4RBsUpKUmfSfjXBcjtn4u2vY0Lez_XHDw8"></Image>
                  <List.Item
                    as="a"
                    href="https://www.linkedin.com/in/aaron-spurgeon-9919a7183"
                    target="blank"
                  >
                    <Image
                      src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca"
                      width="15"
                    ></Image>
                  </List.Item>
                  <List.Item
                    as="a"
                    href="https://github.com/aaronspurgeon"
                    target="blank"
                  >
                    <Image
                      src="https://github.com/favicon.ico"
                      width="15"
                    ></Image>
                  </List.Item>
                </Grid>
              </Grid.Column>
              <Grid.Column column="column">
                <Grid row="ui segment">
                  <Image src="https://media-exp1.licdn.com/dms/image/C4E03AQE0zykQpv0kCw/profile-displayphoto-shrink_200_200/0?e=1595462400&v=beta&t=xC37n0dgFd0yvuSfiVQWfjSzaq6RHk_rcrsOjfyHSx8"></Image>
                  <List.Item
                    as="a"
                    href="https://www.linkedin.com/in/jonathan-craig-taylor"
                    target="blank"
                  >
                    <Image
                      src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca"
                      width="15"
                    ></Image>
                  </List.Item>
                  <List.Item
                    as="a"
                    href="https://github.com/jonyonson"
                    target="blank"
                  >
                    <Image
                      src="https://github.com/favicon.ico"
                      width="15"
                    ></Image>
                  </List.Item>
                </Grid>
              </Grid.Column>
            </Segment>
          </StyledContainer> */}
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
