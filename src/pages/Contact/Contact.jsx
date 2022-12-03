import React, {useRef ,useEffect} from "react";
import Transition from "../../components/Transition/Transition";
import "./Contact.css";
import gsap from 'gsap'
import Form from "../../components/Form/Form";
const Contact = () => {
    const contact = gsap.timeline()
    const contacth1 = useRef(null)
    const contactimg = useRef(null)
    const form = useRef(null)
    useEffect(()=> {
        contact.from(contacth1.current, {
            duration: 0.6,
            skewX: 10,
            x: -100,
            opacity: 0
        }, "-=3.5")
        contact.from(contactimg.current, {
            duration: 0.5,
            y: -200,
            opacity: 0
        }, "-=3")
        contact.to(form.current,{
            duration: 0.5,
            y: -200,
            opacity: 1
        })
    })
  return (
    <div className="contact_page">
        <Transition timeline={contact}/>
      <div className="contact-image contact-overlay" ref={contactimg}></div>
      <div className="container-contact" ref={contacth1}>
        <h1>Contact Page</h1>
      </div>
      <Form ref={form}/>
    </div>    
  );
};

export default Contact;
