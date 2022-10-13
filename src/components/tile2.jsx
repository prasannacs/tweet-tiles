import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Accordion } from "react-bootstrap";

export default function Tile2() {

  useEffect(() => {
    console.log('Tile 2 ');
  }, []);


  return (

    <div>
      <title>Tile 2</title>

      <head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@xcv" />
        <meta name="twitter:creator" content="@nickbilton" />
        <meta property="twitter:title" content="A Twitter for My Sister" />
        <meta property="twitter:description" content="In the early days, Twitter grew so quickly that it was almost impossible to add new features because engineers spent their time trying to keep the rocket ship from stalling." />
        <meta property="twitter:image" content="http://graphics8.nytimes.com/images/2011/12/08/technology/bits-newtwitter/bits-newtwitter-tmagArticle.jpg" />

      </head>
      <Container>
        <Row>
          <h2>Tile 2 example</h2>
        </Row></Container>
    </div>
  );

}


