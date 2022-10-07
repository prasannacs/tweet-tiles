import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Accordion } from "react-bootstrap";

export default function Tile1() {

  useEffect(() => {
    console.log('Tile1 ');
  }, []);


  return (

    <div>
              <Container>
        <Row>
            <h2>Tile 1 example</h2>
        </Row></Container>
    </div>
  );

}


