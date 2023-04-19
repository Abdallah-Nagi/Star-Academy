import React from "react";
import "./Courses.css";
import { AiOutlineSearch } from "react-icons/ai";
import biologyImage from "../assets/biology.jpg";
import profile from "..//assets/profile.jpg";

function Courses() {
  return (
    <section className="main-courses">
      <div className="main-courses-wrapper">
        <div className="search-container">
          <span className="search-icon">
            <AiOutlineSearch />
          </span>
          <input type="text" className="search-input" placeholder="Math..." />
        </div>
        <div className="main-courses-container">
          <div className="main-course">
            <img className="course-image" src={biologyImage} />
            <div className="course-description">
              <h4 className="title">Biology Cambridge O.L</h4>
              <div className="tutor">
                <img src={profile} />
                <span className="name">Abdallah Nagy</span>
              </div>
              <ul className="content-list">
                <h5>Includes:</h5>
                <li className="item">
                  <span>Explanatory Videos for each chapter (10 houres)</span>
                </li>
                <li className="item">
                  <span>Solved classified questions (2010 to 2023)</span>
                </li>
                <li className="item">
                  <span>Solved pervious exams (2010 to 2023)</span>
                </li>
                <li className="item">
                  <span>Flash card questions for each chapter (100+)</span>
                </li>
              </ul>
              <span className="price">7500.00 EGP</span>
              <div className="course-nav">
                <a href="#" className="main-course-btn">
                  View Course
                </a>
                <a href="#" className="main-course-btn">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
          <div className="main-course">
            <img className="course-image" src={biologyImage} />
            <div className="course-description">
              <h4 className="title">Biology Cambridge O.L</h4>
              <div className="tutor">
                <img src={profile} />
                <span className="name">Abdallah Nagy</span>
              </div>
              <ul className="content-list">
                <h5>Includes:</h5>
                <li className="item">
                  <span>Explanatory Videos for each chapter (10 houres)</span>
                </li>
                <li className="item">
                  <span>Solved classified questions (2010 to 2023)</span>
                </li>
                <li className="item">
                  <span>Solved pervious exams (2010 to 2023)</span>
                </li>
                <li className="item">
                  <span>Flash card questions for each chapter (100+)</span>
                </li>
              </ul>
              <span className="price">7500.00 EGP</span>
              <div className="course-nav">
                <a href="#" className="main-course-btn">
                  View Course
                </a>
                <a href="#" className="main-course-btn">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
          <div className="main-course">
            <img className="course-image" src={biologyImage} />
            <div className="course-description">
              <h4 className="title">Biology Cambridge O.L</h4>
              <div className="tutor">
                <img src={profile} />
                <span className="name">Abdallah Nagy</span>
              </div>
              <ul className="content-list">
                <h5>Includes:</h5>
                <li className="item">
                  <span>Explanatory Videos for each chapter (10 houres)</span>
                </li>
                <li className="item">
                  <span>Solved classified questions (2010 to 2023)</span>
                </li>
                <li className="item">
                  <span>Solved pervious exams (2010 to 2023)</span>
                </li>
                <li className="item">
                  <span>Flash card questions for each chapter (100+)</span>
                </li>
              </ul>
              <span className="price">7500.00 EGP</span>
              <div className="course-nav">
                <a href="#" className="main-course-btn">
                  View Course
                </a>
                <a href="#" className="main-course-btn">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
          <div className="main-course">
            <img className="course-image" src={biologyImage} />
            <div className="course-description">
              <h4 className="title">Biology Cambridge O.L</h4>
              <div className="tutor">
                <img src={profile} />
                <span className="name">Abdallah Nagy</span>
              </div>
              <ul className="content-list">
                <h5>Includes:</h5>
                <li className="item">
                  <span>Explanatory Videos for each chapter (10 houres)</span>
                </li>
                <li className="item">
                  <span>Solved classified questions (2010 to 2023)</span>
                </li>
                <li className="item">
                  <span>Solved pervious exams (2010 to 2023)</span>
                </li>
                <li className="item">
                  <span>Flash card questions for each chapter (100+)</span>
                </li>
              </ul>
              <span className="price">7500.00 EGP</span>
              <div className="course-nav">
                <a href="#" className="main-course-btn">
                  View Course
                </a>
                <a href="#" className="main-course-btn">
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;
