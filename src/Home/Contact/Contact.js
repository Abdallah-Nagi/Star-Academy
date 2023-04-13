import React from "react";
import "./Contact.css";
import { BsFillPersonFill } from "react-icons/bs";
function Contact() {
  return (
    <section className="contact">
      <h2>Have Any Questions?</h2>
      <p>
        We welcome any of your inquiries and we are pleased to help you and
        provide for you easy and updated educational enviroment.
      </p>
      <form className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea rows="4" cols="50" placeholder="Message"></textarea>
        <button>Submit</button>
      </form>
    </section>
  );
}

export default Contact;