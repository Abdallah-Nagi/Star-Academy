import React, { useState } from "react";
import "./Nav.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineClose, AiOutlineHome } from "react-icons/ai";
import { FaBook } from "react-icons/fa";
import { MdGroups } from "react-icons/md";

function Nav() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu((prev) => !prev);
  };
  return (
    <>
      <nav>
        <ul className="nav-list">
          <li className="nav-item nav-icon small-scr">
            <a href="#">
              <span className="icon">
                <BsFillPersonFill />
              </span>
            </a>
          </li>
          <li className="nav-item nav-logo">
            <a href="#" className="brand-logo">
              <span className="logo"></span>
              <span className="name">Academy</span>
            </a>
          </li>
          <li className="nav-item nav-icon small-scr">
            <a href="#" onClick={handleMenu}>
              <span className="icon">
                <RxHamburgerMenu />
              </span>
            </a>
          </li>
          <div className="medium-scr links-container between">
            <li className="nav-item text medium-scr">
              <a href="#">Home</a>
            </li>
            <li className="nav-item text medium-scr">
              <a href="#">Courses</a>
            </li>
            <li className="nav-item text medium-scr">
              <a href="#about">About</a>
            </li>
            <li className="nav-item text large-scr">
              <a href="#staff">Staff</a>
            </li>
          </div>
          <div className="medium-scr links-container">
            <li className="nav-item text medium-scr">
              <span className="medium-scr line"></span>
              <a href="#">
                <span>Login</span>
              </a>
              <a className="btn" href="#">
                <span>Sign up</span>
              </a>
            </li>
          </div>
        </ul>
      </nav>
      <div className={`full-menu ${openMenu ? "open" : "close"}`}>
        <header className="full-menu-nav">
          <ul className="full-menu-nav-list">
            <li className="full-menu-nav-item">
              <a href="#" className="brand-logo">
                <span className="logo"></span>
                <span className="name">Academy</span>
              </a>
            </li>
            <li className="full-menu-nav-item icon" onClick={handleMenu}>
              <AiOutlineClose />
            </li>
          </ul>
        </header>
        <section>
          <ul className="full-menu-body-list">
            <li className="full-menu-body-item">
              <a href="#" onClick={handleMenu}>
                <span className="full-menu-body-icon">
                  <AiOutlineHome />
                </span>
                <span className="full-menu-body-text">Home</span>
              </a>
            </li>
            <li className="full-menu-body-item">
              <a href="#" onClick={handleMenu}>
                <span className="full-menu-body-icon">
                  <FaBook />
                </span>
                <span className="full-menu-body-text">Courses</span>
              </a>
            </li>
            <li className="full-menu-body-item">
              <a href="#staff" onClick={handleMenu}>
                <span className="full-menu-body-icon">
                  <MdGroups />
                </span>
                <span className="full-menu-body-text">Staff</span>
              </a>
            </li>
            <li className="full-menu-body-item">
              <a href="#" onClick={handleMenu}>
                <span className="full-menu-body-icon">
                  <BsFillPersonFill />
                </span>
                <span className="full-menu-body-text">Account</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default Nav;
