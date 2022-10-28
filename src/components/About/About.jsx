import React, {useRef, useEffect} from "react";
import "./About.css";
import gsap from 'gsap'
import Transition from "../Transition/Transition";

const About = () => {
    const about = gsap.timeline()
    const abouth1 = useRef(null)
    const aboutimg = useRef(null)
    useEffect(()=> {
        about.from(abouth1.current, {
            duration: 0.6,
            skewX: 10,
            x: -100,
            opacity: 0
        }, "-=3.5")
        about.from(aboutimg.current, {
            duration: 0.5,
            y: -200,
            opacity: 0
        }, "-=3")
    })
  return (
    <div>
        <Transition timeline={about}/>
      <div className="about-image about-overlay" ref={aboutimg}></div>
      <div className="container-about" ref={abouth1}>
        <h1>About Page</h1>
      </div>
    </div>
  );
};

export default About;
