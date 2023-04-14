import React from "react";
import "./Staff.css";
import profile from "../../../src/assets/profile.jpg";
import { AnimationOnScroll } from "react-animation-on-scroll";
function Staff() {
  return (
    <section className="staff">
      <div className="btn-container">
        <a className="btn btn-staff">Learn from the best!</a>
      </div>
      <div className="staff-container">
        <AnimationOnScroll
          offset={100}
          animateOnce={true}
          animateIn="animate slide"
        >
          <div className="person">
            <img src={profile} />
            <span className="name">Abdallah Nagy</span>
            <span className="desc">Biology Teacher</span>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          offset={100}
          animateOnce={true}
          animateIn="animate slide"
        >
          <div className="person">
            <img src={profile} />
            <span className="name">Abdallah Nagy</span>
            <span className="desc">Biology Teacher</span>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          offset={100}
          animateOnce={true}
          animateIn="animate slide"
        >
          <div className="person">
            <img src={profile} />
            <span className="name">Abdallah Nagy</span>
            <span className="desc">Biology Teacher</span>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          offset={100}
          animateOnce={true}
          animateIn="animate slide"
        >
          <div className="person">
            <img src={profile} />
            <span className="name">Abdallah Nagy</span>
            <span className="desc">Biology Teacher</span>
          </div>
        </AnimationOnScroll>
      </div>
      <span className="design-star-bottom"></span>
      <span className="design-star-top"></span>
    </section>
  );
}

export default Staff;
