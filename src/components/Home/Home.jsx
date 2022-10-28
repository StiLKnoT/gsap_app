import React, {useRef ,useEffect} from "react";
import Transition from "../Transition/Transition";
import "./Home.css";
import gsap from 'gsap'
const Home = () => {
    const home = gsap.timeline()
    const homeh1 = useRef(null)
    const homeimg = useRef(null)
    useEffect(()=> {
        home.from(homeh1.current, {
            duration: 0.6,
            skewX: 10,
            x: -100,
            opacity: 0
        }, "-=3.5")
        home.from(homeimg.current, {
            duration: 0.5,
            y: -200,
            opacity: 0
        }, "-=3")
    })
  return (
    <div>
      <Transition timeline={home}/>
      <div className="home-image home-overlay" ref={homeimg}></div>

      <div className="container-home">
        <h1 ref={homeh1}>Home Page</h1>
      </div>
      <div style={{position: "absolute", top: "80%", color:"#fff", fontSize:"25px", padding:"0 10%"}}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, enim atque perspiciatis suscipit, facere saepe aspernatur commodi natus, nemo dolorem sint possimus ipsam similique rem? At magni nam beatae in?</div>
      <div style={{position: "absolute", top: "100%", color:"red", fontSize:"25px", padding:"0 10%"}}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, enim atque perspiciatis suscipit, facere saepe aspernatur commodi natus, nemo dolorem sint possimus ipsam similique rem? At magni nam beatae in?</div>
    </div>
  );
};

export default Home;
