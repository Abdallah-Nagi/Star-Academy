import React from "react";
import "./Introduction.css";
import { WiStars } from "react-icons/wi";
function Introduction() {
  return (
    <section className="introduction">
      <div className="intro-container">
        <h1>
          Your Road to
          <span className="special-clr"> A*</span>
          's
        </h1>
        <p>
          Achieve the highest scores via
          <span> Star Academy</span>. We provide outstanding IGCSE courses in a
          variety of subjects, our top-notch tutors not only provide solid
          tutoring of the curriculum but also focus on solving myriad of
          previous exams questions to ease the exam for our studnets.
        </p>
        <div className="btn-container">
          <a className="btn btn-introduction">View courses</a>
        </div>
        <div className="star-logo">
          <div className="star-one">
            <WiStars />
          </div>
          <div className="star-two">
            <WiStars />
          </div>
          <div className="star-three">
            <WiStars />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
