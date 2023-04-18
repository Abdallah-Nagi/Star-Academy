import React from "react";
import "./Footer.css";
import {
  AiOutlineHome,
  AiOutlineMail,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FaBook } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <section className="footer">
      <div className="footer-container">
        <div className="info">
          <h4>Info</h4>
          <div className="link-container">
            <a href="#">
              <AiOutlineHome className="icon" />
              Home
            </a>
          </div>
          <div className="link-container">
            <a href="#">
              <FaBook className="icon" />
              Courses
            </a>
          </div>
          <div className="link-container">
            <a href="#staff">
              <MdGroups className="icon" />
              Staff
            </a>
          </div>
          <div className="link-container">
            <a href="#">
              <BsFillPersonFill className="icon" />
              Account
            </a>
          </div>
          <div className="link-container">
            <a href="#contact">
              <AiOutlineMail className="icon" />
              Contact
            </a>
          </div>
        </div>
        <div className="links">
          <h4>Follow us</h4>
          <a href="#">
            <AiFillFacebook />
          </a>
          <a href="#">
            <AiFillLinkedin />
          </a>
          <a href="#">
            <AiFillTwitterCircle />
          </a>
        </div>
      </div>
      <small>
        Copyright &copy; {currentYear}, Star Academy. All rights Reserved
      </small>
    </section>
  );
}

export default Footer;
