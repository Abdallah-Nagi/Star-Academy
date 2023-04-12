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
    console.log(openMenu);
  };
  return (
    <>
      <nav>
        <ul className="nav-list">
          <li className="nav-item nav-icon">
            <a href="#">
              <span className="icon">
                <BsFillPersonFill />
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="brand-logo">
              <span className="logo"></span>
              <span className="name">Academy</span>
            </a>
          </li>
          <li className="nav-item nav-icon">
            <a href="#" onClick={handleMenu}>
              <span className="icon">
                <RxHamburgerMenu />
              </span>
            </a>
          </li>
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
              <a href="#">
                <span className="full-menu-body-logo">
                  <AiOutlineHome />
                </span>
                <span className="full-menu-body-text">Home</span>
              </a>
            </li>
            <li className="full-menu-body-item">
              <a href="#">
                <span className="full-menu-body-logo">
                  <FaBook />
                </span>
                <span className="full-menu-body-text">Courses</span>
              </a>
            </li>
            <li className="full-menu-body-item">
              <a href="#">
                <span className="full-menu-body-logo">
                  <MdGroups />
                </span>
                <span className="full-menu-body-text">Staff</span>
              </a>
            </li>
            <li className="full-menu-body-item">
              <a href="#">
                <span className="full-menu-body-logo">
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
