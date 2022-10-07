import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Accordion } from "react-bootstrap";

export default function Tile2() {

  useEffect(() => {
    console.log('Tile 2 ');
  }, []);


  return (

    <div>
      <Container>
        <Row>
            <h2>Tile 2 example</h2>
        </Row></Container>
    </div>
  );

}


