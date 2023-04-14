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

function Benefits() {
  const titleRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const intersecting = entry.isIntersecting;
        if (intersecting) {
          console.log("entered");
        }
        return;
      });
    });
    observer.observe(titleRef.current);
  }, []);

  return (
    <section className="benefits">
      <h2 ref={titleRef} className="animate glow">
        Why star Academy?
      </h2>
      <div className="benefit-container">
        <div className="title-container animate slide delay-1">
          <span className="icon">
            <FiClock />
          </span>
          <span className="title">Study Fast</span>
        </div>
        <p className="description animate glow delay-5">
          study faster and at your own pace as all of the lessons are uploaded.
        </p>
      </div>
      <div className="benefit-container">
        <div className="title-container animate slide delay-2">
          <span className="icon">
            <TbAlignBoxLeftTop />
          </span>
          <span className="title">Classified Questions</span>
        </div>
        <p className="description animate glow delay-6">
          Classified questions following each chapter are solved to so solidify
          the topics being taught.
        </p>
      </div>
      <div className="benefit-container">
        <div className="title-container animate slide delay-3">
          <span className="icon">
            <IoIosPaper />
          </span>
          <span className="title">Previous Exams</span>
        </div>
        <p className="description animate glow delay-7">
          In each course, past paper exams from previous 10+ years are solved.
        </p>
      </div>
      <div className="benefit-container">
        <div className="title-container animate slide delay-4">
          <span className="icon">
            <HiLocationMarker />
          </span>
          <span className="title">Study From Anywhere</span>
        </div>
        <p className="description animate glow delay-8">
          Learn from anywhere using your laptop or smart phone.
        </p>
      </div>
      <div className="benefit-container">
        <div className="title-container animate slide delay-5">
          <span className="icon">
            <BsCardChecklist />
          </span>
          <span className="title">Flash Cards</span>
        </div>
        <p className="description animate glow delay-9">
          memorize high-yield topics via flash cards.
        </p>
      </div>
      <div className="benefit-container">
        <div className="title-container animate slide delay-6">
          <span className="icon">
            <AiFillFolderOpen />
          </span>
          <span className="title">Variety of Courses</span>
        </div>
        <p className="description  animate glow delay-10">
          We provide a variety of IGCSE courses.
        </p>
      </div>
      <div className="benefit-container">
        <div className="title-container animate slide delay-7">
          <span className="icon">
            <MdOutlineVerifiedUser />
          </span>
          <span className="title">Well-built System</span>
        </div>
        <p className="description animate glow delay-11">
          This academy is designed smartly to provide maximum benifit for the
          students.
        </p>
      </div>
      <div className="benefit-container">
        <div className="title-container animate slide delay-8">
          <span className="icon">
            <FaChalkboardTeacher />
          </span>
          <span className="title">Top-grade Tutors</span>
        </div>
        <p className="description animate glow delay-12">
          learn from the top tutors as they produce a fruitful course via their
          experience.
        </p>
      </div>
      <div className="benefit-container">
        <div className="title-container animate slide delay-9">
          <span className="icon">
            <TbDiscountCheckFilled />
          </span>
          <span className="title">Affordable Prices</span>
        </div>
        <p className="description animate glow delay-13">
          We take into considiration our students budget thus provide affortable
          prices.
        </p>
      </div>
    </section>
  );
}

export default Benefits;
