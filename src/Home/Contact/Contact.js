import React from "react";
import "./Contact.css";
import { BsFillPersonFill } from "react-icons/bs";
function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-wrapper">
        <div className="contact-header">
          <h2>Have Any Questions?</h2>
          <p>
            We welcome any of your inquiries and we are pleased to help you and
            provide for you easy and updated educational enviroment.
          </p>
        </div>
        <form
          action="https://public.herotofu.com/v1/d2b64930-ddee-11ed-bc08-2fcba7301103"
          method="post"
          accept-charset="UTF-8"
          className="contact-form"
        >
          <input required name="Name" type="text" placeholder="Name" />
          <input required name="Email" type="email" placeholder="Email" />
          <textarea
            name="Message"
            rows="4"
            cols="50"
            placeholder="I would like to ask about......"
          ></textarea>
          <div className="btn-container">
            <button type="sumbit" className="btn btn-contact">
              Submit
            </button>
          </div>
          <div
            style={{
              textIndent: -99999,
              whiteSpace: "nowrap",
              overflow: "hidden",
              position: "absolute",
            }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="_gotcha"
              tabindex="-1"
              autocomplete="off"
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
