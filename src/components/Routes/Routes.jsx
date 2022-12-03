import React from "react";
import {Routes, Route} from 'react-router-dom'
import About from "../../pages/About/About";
import Home from "../../pages/Home/Home";
import Contact from "../../pages/Contact/Contact";

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
