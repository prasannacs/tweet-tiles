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
                <title>Page 1</title>
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:site" content="@xcv" />
                <meta name="twitter:creator" content="@nickbilton" />
                <meta property="og:url" content="http://bits.blogs.nytimes.com/2011/12/08/a-twitter-for-my-sister/" />
                <meta property="og:title" content="A Twitter for My Sister" />
                <meta property="og:description" content="In the early days, Twitter grew so quickly that it was almost impossible to add new features because engineers spent their time trying to keep the rocket ship from stalling." />
                <meta property="og:image" content="http://graphics8.nytimes.com/images/2011/12/08/technology/bits-newtwitter/bits-newtwitter-tmagArticle.jpg" />
            </MetaTags>
            <Container>
                <Row>
                    <h2>Tile 1 example</h2>
                </Row></Container>
        </div>
    );

}


