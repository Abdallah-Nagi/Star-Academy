import React from "react";
import "./About.css";
import { TbCertificate } from "react-icons/tb";
import { GoVerified } from "react-icons/go";
import { AiFillPieChart, AiOutlineLineChart } from "react-icons/ai";

function About() {
  return (
    <section className="about">
      <div className="title-icon">
        <span className="design-main">
          <TbCertificate />
        </span>
        <span className="design-secondary one">A*</span>
        <span className="design-secondary two">
          <GoVerified />
        </span>
        <span className="design-secondary three">
          <AiOutlineLineChart />
        </span>
        <span className="design-secondary four">
          <AiFillPieChart />
        </span>
      </div>
      <div className="design-icon"></div>
      <div className="design-shape"></div>
      <p className="about-paragraph">
        Star Academy is built to create well-rounded igcse courses for the
        students. but unlike any different centre, our tutors focus on creating
        instructional to the point explanatory lessons of the curriculum. Each
        course will contain flash cards questions for memorizing high-yield
        topics, and our tutors will solve past papers questions following each
        topic to solidify the topics being taught.
        <span> Try any of our courses free of charge.</span>
        <div className="about-btn-container">
          <button className="btn">Try Our Courses</button>
        </div>
      </p>
    </section>
  );
}

export default About;
