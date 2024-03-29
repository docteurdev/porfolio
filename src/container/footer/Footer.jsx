import React, { useState } from 'react'
import './footer.scss';
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import emailjs from "emailjs-com";
import * as Yup from "yup";
import { Formik } from 'formik';

const Footer = () => {

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [isSubmitted, setisSubmitted] = useState(false);
  const [loading, setloading] = useState(false);

  const schema = Yup.object({
    name: Yup.string().min(2, "Trop court").required("Veillez entrer votre Nom"),
    email: Yup.string().email().required("Veillez entrer votre email"),
    description: Yup.string().max(100).required("Entrez une description svp"),
  })

  const handleSubmit = (e) => {
    setloading(true)
    e.preventDefault();

    emailjs.sendForm('service_72wpw97', 'template_0vqrpfe', e.target, 'user_sxdz4Uvhbn5o5CHhtcOGW')
      .then((result) => {
        if (result.status) {

          setisSubmitted(true)
        }
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

  }


  return (
    <>
      <h2 className="head-text">Contact me</h2>
      <div className="app__footer-cards">

        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:adjeoumar@gmail.com" className='p-text' >adjeoumar@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="email" />
          <div>
            <a href="tel: +225 01-42-26-90-19" className='p-text' >+225 01-42-26-90-19 (whatsapp)</a> <br />
            <a href="tel: +225 01-42-26-90-19" className='p-text' >+225 05-86-88-31-61</a>
          </div>
        </div>

      </div>

      {!isSubmitted &&
       <form onSubmit={handleSubmit} className="app__footer-form app--flex">
        <div className="app__flex">
          <input type="text" placeholder=' Name' name='nom' className="p-text" required />
        </div>
        <div className="app__flex">
          <input type="text" placeholder='Email' name='email' className="p-text" required />
        </div>
        <div>
          <textarea placeholder='Message' name='message' required />
        </div>
        <button type='submit' className="p-text"  >{loading ? "Sending..." : "Send"}</button>
      </form>}
      {isSubmitted && <p className="p-text" style={{ fontSize: 18, textAlign: "center" }} >Merci message envoyé avec success</p>}
       
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  //  "app__"
)