import React from "react";
import {Routes, Route} from 'react-router-dom'
import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";

const Rout = () => {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<About/>}>
        </Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </div>
  );
};

export default Rout;
