import React from "react";
import "./Courses.css";
import biologyImage from "../../../src/assets/biology.jpg";
import profile from "../../../src/assets/profile.jpg";

function Courses() {
  return (
    <section className="courses">
      <h2>Avaliable Courses</h2>
      <div className="courses-container">
        <div className="course">
          <a href="#"></a>
          <img className="course-image" src={biologyImage} />
          <div className="course-info">
            <h4 className="title">Biology Cambridge O.L</h4>
            <div className="tutor">
              <img src={profile} className="image" />
              <span className="name">Abdallah Nagy</span>
            </div>
            <span className="price">7500.00 EGP</span>
          </div>
        </div>

        <div className="course">
          <a href="#"></a>
          <img className="course-image" src={biologyImage} />
          <div className="course-info">
            <h4 className="title">Biology Cambridge O.L</h4>
            <div className="tutor">
              <span className="name">Abdallah Nagy</span>
              <img src="" className="image" />
            </div>
            <span className="price">7500.00 EGP</span>
          </div>
        </div>

        <div className="course">
          <a href="#"></a>
          <img className="course-image" src={biologyImage} />
          <div className="course-info">
            <h4 className="title">Biology Cambridge O.L</h4>
            <div className="tutor">
              <span className="name">Abdallah Nagy</span>
              <img src="" className="image" />
            </div>
            <span className="price">7500.00 EGP</span>
          </div>
        </div>

        <div className="course">
          <a href="#"></a>
          <img className="course-image" src={biologyImage} />
          <div className="course-info">
            <h4 className="title">Biology Cambridge O.L</h4>
            <div className="tutor">
              <span className="name">Abdallah Nagy</span>
              <img src="" className="image" />
            </div>
            <span className="price">7500.00 EGP</span>
          </div>
        </div>

        <div className="course">
          <a href="#"></a>
          <img className="course-image" src={biologyImage} />
          <div className="course-info">
            <h4 className="title">Biology Cambridge O.L</h4>
            <div className="tutor">
              <span className="name">Abdallah Nagy</span>
              <img src="" className="image" />
            </div>
            <span className="price">7500.00 EGP</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;
