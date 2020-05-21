import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'


export default function AboutCard({ image, linkdin, github, name, title }) {
    return (
        <Card>
            <Image src={image} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Description>
                    {title}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a href={linkdin} style={{ paddingRight: '20px' }}
                target="_blank"
                >
                    <Image
                        src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca"
                        width="35"
                    ></Image>
                </a>
                <a href={github}
                target="_blank"
                >
                    <Image
                        src="https://github.com/favicon.ico"
                        width="35"
                    ></Image>
                </a>
            </Card.Content>
        </Card>
    )
}

