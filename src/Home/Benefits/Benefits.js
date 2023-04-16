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
import { BsStars } from "react-icons/bs";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Benefits() {
  return (
    <section className="benefits">
      <div className="benefits-container">
        <h2 className="animate glow">Why star Academy?</h2>
        <div className="col-1">
          <AnimationOnScroll
            offset={100}
            animateOnce={true}
            animateIn="animate slide"
          >
            <div className="benefit-container">
              <div className="icon-container">
                <span className="icon">
                  <FiClock />
                </span>
              </div>
              <div className="description-container">
                <span className="title">Study Fast</span>
                <p className="description">
                  study faster and at your own pace as all of the lessons are
                  uploaded.
                </p>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            offset={100}
            animateOnce={true}
            animateIn="animate slide"
          >
            <div className="benefit-container">
              <div className="icon-container">
                <span className="icon">
                  <TbAlignBoxLeftTop />
                </span>
              </div>
              <div className="description-container">
                <span className="title">Classified Questions</span>
                <p className="description">
                  Classified questions following each chapter are solved to so
                  solidify the topics being taught.
                </p>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            offset={100}
            animateOnce={true}
            animateIn="animate slide"
          >
            <div className="benefit-container">
              <div className="icon-container">
                <span className="icon">
                  <IoIosPaper />
                </span>
              </div>
              <div className="description-container">
                <span className="title">Previous Exams</span>
                <p className="description">
                  In each course, past paper exams from previous 10+ years are
                  solved.
                </p>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            offset={100}
            animateOnce={true}
            animateIn="animate slide"
          >
            <div className="benefit-container">
              <div className="icon-container">
                <span className="icon">
                  <HiLocationMarker />
                </span>
              </div>
              <div className="description-container">
                <span className="title">Study From Anywhere</span>
                <p className="description">
                  Learn from anywhere using your laptop or smart phone.
                </p>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            offset={100}
            animateOnce={true}
            animateIn="animate slide"
          >
            <div className="benefit-container">
              <div className="icon-container">
                <span className="icon">
                  <BsCardChecklist />
                </span>
              </div>
              <div className="description-container">
                <span className="title">Flash Cards</span>
                <p className="description">
                  memorize high-yield topics via flash cards.
                </p>
              </div>
            </div>
          </AnimationOnScroll>
        </div>
        <div className="col-2">
          <AnimationOnScroll
            offset={100}
            animateOnce={true}
            animateIn="animate slide"
          >
            <div className="benefit-container">
              <div className="icon-container">
                <span className="icon">
                  <AiFillFolderOpen />
                </span>
              </div>
              <div className="description-container">
                <span className="title">Variety of Courses</span>
                <p className="description">
                  We provide a variety of IGCSE courses.
                </p>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            offset={100}
            animateOnce={true}
            animateIn="animate slide"
          >
            <div className="benefit-container">
              <div className="icon-container">
                <span className="icon">
                  <MdOutlineVerifiedUser />
                </span>
              </div>
              <div className="description-container">
                <span className="title">Well-built System</span>
                <p className="description">
                  This academy is designed smartly to provide maximum benifit
                  for the students.
                </p>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            offset={100}
            animateOnce={true}
            animateIn="animate slide"
          >
            <div className="benefit-container">
              <div className="icon-container">
                <span className="icon">
                  <FaChalkboardTeacher />
                </span>
              </div>
              <div className="description-container">
                <span className="title">Top-grade Tutors</span>
                <p className="description">
                  learn from the top tutors as they produce a fruitful course
                  via their experience.
                </p>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            offset={100}
            animateOnce={true}
            animateIn="animate slide"
          >
            <div className="benefit-container">
              <div className="icon-container">
                <span className="icon">
                  <TbDiscountCheckFilled />
                </span>
              </div>
              <div className="description-container">
                <span className="title">Affordable Prices</span>
                <p className="description">
                  We take into considiration our students budget thus provide
                  affortable prices.
                </p>
              </div>
            </div>
          </AnimationOnScroll>
        </div>
        <div className="design-star">
          <BsStars />
        </div>
        <span className="design-top"></span>
      </div>
    </section>
  );
}

export default Benefits;
