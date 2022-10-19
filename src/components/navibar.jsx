import React, { useState, useEffect } from "react";
import { Navbar, Nav } from 'react-bootstrap'

export default function NaviBar() {

  return (
    <div>

<Navbar bg="dark" variant="dark">
        <Navbar.Brand href="">
          <img
            alt=""
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/440px-Twitter-logo.svg.png"
            width="30"
            height="20"
            className="d-inline-block align-top"
          />
          &nbsp; Tweet Tiles Examples
        </Navbar.Brand>
      </Navbar>

      <Nav fill variant="tabs" activeKey="1">
        <Nav.Item>
          <Nav.Link href="/tile1" eventKey="1"><h4>1. Tile 1</h4></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/tile2" eventKey="2"><h4>2. Tile 2</h4></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/tile3" eventKey="3"><h4>3. Tile 3</h4></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/tile1" eventKey="3"><h4>Help & FAQ</h4></Nav.Link>
        </Nav.Item>

      </Nav>
    </div>
  );

}


