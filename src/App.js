import logo from './logo.svg';
import './App.css';
import NaviBar from "./components/navibar";
import Tile1 from "./components/tile1";
import Tile2 from "./components/tile2";
import Tile3 from "./components/tile3";
import React, { Component } from "react";
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <div>
            <NaviBar />
          </div>
          <div className="content">
            <Routes>
              <Route path="/tile1" element={<Tile1 />} />
              <Route path="/tile2" element={<Tile2 />} />
              <Route path="/tile3" element={<Tile3 />} />
              <Route exact path="/" element={<Tile1 />} />
            </Routes>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
