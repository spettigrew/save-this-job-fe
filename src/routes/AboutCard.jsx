import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'


export default function AboutCard({ image, linkdin, github, name }) {
    return (
        <Card>
            <Image src={image} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{name}</Card.Header>

                <Card.Description>
                    Full Stack Developer
      </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a href={linkdin}>
                    <Image
                        src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca"
                        width="35"
                    ></Image>
                </a>
                <a href={github}>
                    <Image
                        src="https://github.com/favicon.ico"
                        width="35"
                    ></Image>
                </a>
            </Card.Content>
        </Card>
    )
}

{/* <StyledImg src={bud.image}></StyledImg>
                  <Grid.Row>
                    <List.Item as="a" href={bud.linkdin} target="blank">
                      <Image
                        src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca"
                        width="15"
                      ></Image>
                    </List.Item>
                    <List.Item as="a" href={bud.github} target="blank">
                      <Image
                        src="https://github.com/favicon.ico"
                        width="15"
                      ></Image>
                    </List.Item>
                  </Grid.Row> */}
