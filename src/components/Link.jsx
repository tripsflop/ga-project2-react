import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Content from "./Content";

function Link() {
  return (
    <main>
      <Routes path="/">
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="content" element={<Content />}></Route>
      </Routes>
    </main>
  );
}

export default Link;
