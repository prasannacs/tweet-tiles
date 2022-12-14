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
        <meta name="twitter:tile:template" content="2" />
        <meta property="twitter:site" content="@prasannacs" />
        <meta property="twitter:title" content="Tile 2" />
        <meta property="twitter:description" content="In the early days, Twitter grew so quickly that it was almost impossible to add new features because engineers spent their time trying to keep the rocket ship from stalling." />
        <meta property="twitter:image" content="https://cdn.cms-twdigitalassets.com/content/dam/developer-twitter/redesign-2021-images/blog2022/product-news/2022/api/des.jpg.twimg.1920.jpg" />
        <meta property="twitter:tile:info1:text" content="Info 1" />
        <meta property="twitter:tile:info2:text" content="Info 2" />
        <meta property="twitter:cta" content="A Button" />
      </head>
      <Container>
        <Row>
          <h2>Tile 2 example</h2>
        </Row></Container>
    </div>
  );

}


