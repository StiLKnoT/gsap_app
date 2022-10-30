import React, { useRef, useEffect } from "react";
import Transition from "../Transition/Transition";
import "./Home.css";
import gsap from "gsap";
const Home = () => {
  const home = gsap.timeline();
  const homeh1 = useRef(null);
  const homeimg = useRef(null);
  const myimg = useRef(null);
  const home_text = useRef(null);
  const home_text2 = useRef(null);
  useEffect(() => {
    home.from(
      homeh1.current,
      {
        duration: 0.6,
        skewX: 10,
        x: -100,
        opacity: 0,
        zIndex: 2,
      },
      "-=3.5"
    );
    home.from(
      homeimg.current,
      {
        duration: 0.5,
        y: -200,
        opacity: 0,
      },
      "-=3"
    );
    home.to(myimg.current, {
      delay: -3,
      duration: 0.5,
      opacity: 1,
      y: 0,
    });
    home.to(home_text.current, {
      delay: -2.5,
      duration: 0.7,
      opacity: 1,
      y: 0,
      zIndex: 2,
    });
    home.to(home_text2.current, {
      delay: -2.3,
      duration: 0.7,
      opacity: 1,
      y: 0,
      zIndex: 2,
    });
  });
  return (
    <div className="home">
      <div className="home_page">
        <Transition timeline={home} />
        <div className="home-image home-overlay" ref={homeimg}></div>

        <div className="container-home">
          <h1 ref={homeh1}>Home Page</h1>
        </div>
        <div
          className="home-image home-overlay home-image_myImg"
          ref={myimg}
        ></div>
        <div className="overflow">
          <div className="home_page_text" ref={home_text}>
            HI! I'm Nurlan <br />
          </div>
        </div>
      </div>
      <div className="overflow2">
      <div className="home_page_text" ref={home_text2}>
             from Tashkent{" "}
          </div>
      </div>
    </div>
  );
};

export default Home;
