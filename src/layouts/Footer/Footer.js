import React from "react";
import "./Footer.css";
import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FaBook } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <section className="footer">
      <div className="footer-container">
        <div className="info">
          <h4>Info</h4>
          <div className="link-container">
            <Link to="/" href="#">
              <AiOutlineHome className="icon" />
              Home
            </Link>
          </div>
          <div className="link-container">
            <Link to="courses" href="#">
              <FaBook className="icon" />
              Courses
            </Link>
          </div>
          <div className="link-container">
            <Link to="account" href="#">
              <BsFillPersonFill className="icon" />
              Account
            </Link>
          </div>
          <div className="link-container">
            <Link to="cart">
              <AiOutlineShoppingCart className="icon" />
              Cart
            </Link>
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
