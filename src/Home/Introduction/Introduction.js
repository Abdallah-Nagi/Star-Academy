import React from "react";
import "./Introduction.css";
function Introduction() {
  return (
    <section className="introduction">
      <h1>
        Your Road to
        <span className="special-clr"> A*</span>
        's
      </h1>
      <p>
        Achieve the highest scores via Star Academy. We provide outstanding
        igcse courses in a variety of subjects, our top-notch tutors not only
        provide solid understanding of the curriculum but also focus on solving
        myriad of previous exams questions to ease the exam for our studnets.
      </p>
      <div className="btn-container">
        <button className="btn">Check our courses</button>
        <button className="btn">Login / Signup</button>
      </div>
    </section>
  );
}

export default Introduction;
