import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import MetaTags from 'react-meta-tags';

export default function Tile1() {

    useEffect(() => {
        console.log('Tile1 ');
    }, []);

    return (
        <div>
            <MetaTags>
                <title>Tile 1</title>
                <meta name="twitter:tile:template" content="1" />
                <meta property="twitter:site" content="@xcv" />
                <meta name="twitter:creator" content="@nickbilton" />
                <meta property="twitter:title" content="Tile 1" />
                <meta property="twitter:description" content="In the early days, Twitter grew so quickly that it was almost impossible to add new features because engineers spent their time trying to keep the rocket ship from stalling." />
                <meta property="twitter:image" content="http://graphics8.nytimes.com/images/2011/12/08/technology/bits-newtwitter/bits-newtwitter-tmagArticle.jpg" />
            </MetaTags>
            <Container>
                <Row>
                    <h2>Tile 1 example</h2>
                </Row></Container>
        </div>
    );

}


