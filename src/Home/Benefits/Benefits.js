import React from "react";
import { useRef, useState, useEffect } from "react";
import "./Benefits.css";
import { FiClock } from "react-icons/fi";
import { IoIosPaper } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";
import { BsCardChecklist } from "react-icons/bs";
import { AiFillFolderOpen } from "react-icons/ai";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { TbDiscountCheckFilled, TbAlignBoxLeftTop } from "react-icons/tb";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Benefits() {
  return (
    <section className="benefits">
      <h2 className="animate glow">Why star Academy?</h2>
      <AnimationOnScroll
        offset={100}
        animateOnce={true}
        animateIn="animate slide"
      >
        <div className="benefit-container">
          <div className="title-container">
            <span className="icon">
              <FiClock />
            </span>
            <span className="title">Study Fast</span>
          </div>
          <p className="description">
            study faster and at your own pace as all of the lessons are
            uploaded.
          </p>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll
        offset={100}
        animateOnce={true}
        animateIn="animate slide"
      >
        <div className="benefit-container">
          <div className="title-container">
            <span className="icon">
              <TbAlignBoxLeftTop />
            </span>
            <span className="title">Classified Questions</span>
          </div>
          <p className="description">
            Classified questions following each chapter are solved to so
            solidify the topics being taught.
          </p>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll
        offset={100}
        animateOnce={true}
        animateIn="animate slide"
      >
        <div className="benefit-container">
          <div className="title-container">
            <span className="icon">
              <IoIosPaper />
            </span>
            <span className="title">Previous Exams</span>
          </div>
          <p className="description">
            In each course, past paper exams from previous 10+ years are solved.
          </p>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll
        offset={100}
        animateOnce={true}
        animateIn="animate slide"
      >
        <div className="benefit-container">
          <div className="title-container">
            <span className="icon">
              <HiLocationMarker />
            </span>
            <span className="title">Study From Anywhere</span>
          </div>
          <p className="description">
            Learn from anywhere using your laptop or smart phone.
          </p>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll
        offset={100}
        animateOnce={true}
        animateIn="animate slide"
      >
        <div className="benefit-container">
          <div className="title-container">
            <span className="icon">
              <BsCardChecklist />
            </span>
            <span className="title">Flash Cards</span>
          </div>
          <p className="description">
            memorize high-yield topics via flash cards.
          </p>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll
        offset={100}
        animateOnce={true}
        animateIn="animate slide"
      >
        <div className="benefit-container">
          <div className="title-container">
            <span className="icon">
              <AiFillFolderOpen />
            </span>
            <span className="title">Variety of Courses</span>
          </div>
          <p className="description">We provide a variety of IGCSE courses.</p>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll
        offset={100}
        animateOnce={true}
        animateIn="animate slide"
      >
        <div className="benefit-container">
          <div className="title-container">
            <span className="icon">
              <MdOutlineVerifiedUser />
            </span>
            <span className="title">Well-built System</span>
          </div>
          <p className="description">
            This academy is designed smartly to provide maximum benifit for the
            students.
          </p>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll
        offset={100}
        animateOnce={true}
        animateIn="animate slide"
      >
        <div className="benefit-container">
          <div className="title-container">
            <span className="icon">
              <FaChalkboardTeacher />
            </span>
            <span className="title">Top-grade Tutors</span>
          </div>
          <p className="description">
            learn from the top tutors as they produce a fruitful course via
            their experience.
          </p>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll
        offset={100}
        animateOnce={true}
        animateIn="animate slide"
      >
        <div className="benefit-container">
          <div className="title-container">
            <span className="icon">
              <TbDiscountCheckFilled />
            </span>
            <span className="title">Affordable Prices</span>
          </div>
          <p className="description">
            We take into considiration our students budget thus provide
            affortable prices.
          </p>
        </div>
      </AnimationOnScroll>
    </section>
  );
}

export default Benefits;
