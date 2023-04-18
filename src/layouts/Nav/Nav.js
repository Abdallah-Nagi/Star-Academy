import React, { useState } from "react";
import "./Nav.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsFillPersonFill } from "react-icons/bs";
import {
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";
// react router

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
            <Link to="account">
              <span className="icon">
                <BsFillPersonFill />
              </span>
            </Link>
          </li>
          <li className="nav-item nav-logo">
            <Link to="/" className="brand-logo">
              <span className="logo"></span>
              <span className="name">Academy</span>
            </Link>
          </li>
          <li className="nav-item nav-icon small-scr">
            <button onClick={handleMenu}>
              <span className="icon">
                <RxHamburgerMenu />
              </span>
            </button>
          </li>
          <div className="medium-scr links-container between">
            <li className="nav-item text medium-scr">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item text medium-scr">
              <Link to="courses">Courses</Link>
            </li>
            <li className="nav-item text medium-scr">
              <Link to="account">Account</Link>
            </li>
            <li className="nav-item text medium-scr">
              <Link to="cart">Cart</Link>
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
              <Link to="/" onClick={handleMenu} className="brand-logo">
                <span className="logo"></span>
                <span className="name">Academy</span>
              </Link>
            </li>
            <li className="full-menu-nav-item icon" onClick={handleMenu}>
              <AiOutlineClose />
            </li>
          </ul>
        </header>
        <section>
          <ul className="full-menu-body-list">
            <li className="full-menu-body-item">
              <Link to="/" onClick={handleMenu}>
                <span className="full-menu-body-icon">
                  <AiOutlineHome />
                </span>
                <span className="full-menu-body-text">Home</span>
              </Link>
            </li>
            <li className="full-menu-body-item">
              <Link to="courses" onClick={handleMenu}>
                <span className="full-menu-body-icon">
                  <FaBook />
                </span>
                <span className="full-menu-body-text">Courses</span>
              </Link>
            </li>
            <li className="full-menu-body-item">
              <Link to="account" onClick={handleMenu}>
                <span className="full-menu-body-icon">
                  <BsFillPersonFill />
                </span>
                <span className="full-menu-body-text">Account</span>
              </Link>
            </li>
            <li className="full-menu-body-item">
              <Link to="cart" onClick={handleMenu}>
                <span className="full-menu-body-icon">
                  <AiOutlineShoppingCart />
                </span>
                <span className="full-menu-body-text">Cart</span>
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default Nav;
