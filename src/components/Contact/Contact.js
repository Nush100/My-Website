import React, { useRef } from "react";
import './Contact.css';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { SERVIICE_ID, TEMPLATE_ID, PUBLIC_KEY } from "../../constants";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVIICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then((result) => {
          console.log(result.text);
          alert('Email Sent!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contact">
        <div className="contactData">
            <h1 className="contactTitle">Contact Me</h1>
            <span className="contactDesc">Please contact me if you have any messages</span>
            <span className="icon"><MdEmail/> nushkavi123@gmail.com</span>
            <span className="icon"><FaPhoneAlt/> +94772467164 </span>
        </div>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder="Your Name" name="from_name"/>
            <input type="email" className="email" placeholder="Your Email" name="from_email"/>
            <textarea name="message" rows="5" placeholder="Your Message" className="msg"/>
            <button type="submit" className="submitBtn">Submit</button>
        </form>
    </section>
  );
}

export default Contact;