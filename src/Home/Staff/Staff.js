import React from "react";
import { useRef, useEffect } from "react";
import "./Staff.css";
import profile from "../../../src/assets/profile.jpg";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { register } from "swiper/element/bundle";
import { Link } from "react-router-dom";
// register Swiper custom elements
register();
function Staff() {
  const swiperElRef = useRef(null);

  return (
    <section id="staff" className="staff">
      <div className="btn-container">
        <Link to="courses" className="btn btn-staff">
          Learn from the best!
        </Link>
      </div>
      <div className="staff-container">
        <AnimationOnScroll
          offset={100}
          animateOnce={true}
          animateIn="animate slide"
        >
          <swiper-container
            className="swiper-container"
            navigation="true"
            pagination="true"
            pagination-clickable="true"
            slidesPerView="1"
          >
            <swiper-slide>
              <div className="person">
                <img src={profile} />
                <span className="name">Abdallah Nagy!</span>
                <span className="desc">Biology Teacher</span>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className="person">
                <img src={profile} />
                <span className="name">Abdallah Nagy</span>
                <span className="desc">Biology Teacher</span>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className="person">
                <img src={profile} />
                <span className="name">Abdallah Nagy</span>
                <span className="desc">Biology Teacher</span>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className="person">
                <img src={profile} />
                <span className="name">Abdallah Nagy</span>
                <span className="desc">Biology Teacher</span>
              </div>
            </swiper-slide>
          </swiper-container>
        </AnimationOnScroll>
      </div>

      <span className="design-top"></span>
      <span className="design-bottom"></span>
      <span className="design-star-bottom"></span>
    </section>
  );
}

export default Staff;
