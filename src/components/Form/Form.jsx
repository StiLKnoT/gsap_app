import React, {useState, useEffect} from "react";
import axios from "axios";
import './Form.css'

const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [postUser, setPostUser] = useState([])
    const [openForm, setOpenForm] = useState(true)
    const [errorForm, setErrorForm] = useState(true)
  
    const url = "https://6361828d67d3b7a0a6c83cc7.mockapi.io/myemail"
    
    const clear = (value) => {
      setSubject((value = ""));
      setMessage((value = ""));
      setEmail((value = ""));
      setName((value = ""));
    };
    useEffect(()=>{
      getPostUser()
    },[])
  
    const getPostUser = async (e) => {
      e.preventDefault();
      try {
        const resp = await axios.post(url, {
          name: name,
          email: email,
          subject: subject,
          message: message,
        });
        setPostUser(resp.data);
        setTimeout(()=>setOpenForm(!openForm),200) 
        clear();
  
      } catch (error) {
        setTimeout(()=>setErrorForm(!errorForm),200) 
        clear();
      }
    };
  
  return (
    <div>
      <form className="input__box" onSubmit={getPostUser}>
        <input
          type="text"
          className="contact name"
          placeholder="Name *"
        //   placeholder={t("contact.name") + " *"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          className="contact email"
          placeholder="Email *"

        //   placeholder={t("contact.email") + " *"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          className="contact subject"
          placeholder="Subject"

        //   placeholder={t("contact.subject")}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <textarea
          name="message"
          id="message"
        //   placeholder={t("contact.message")}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button className="btn contact pointer" type="submit">
            Send
          {/* {t("contact.submit")} */}
        </button>
      </form>
    </div>
  );
};

export default Form;
