import React from "react";
import "./Courses.css";
function Courses() {
  return (
    <section className="courses">
      <h2>Avaliable Courses</h2>
      <div className="courses-container">
        <div className="course">
          <div className="course-main">
            <div className="course-info">
              <span className="desc">Course</span>
              <h4>Biology Cambridge O.L</h4>
              <a href="#">View course</a>
            </div>
            <div className="course-tutor">
              <img src="/images/profile.jpg" className="img-tutor" />
              <span className="name-tutor">Abdallah Nagy</span>
            </div>
          </div>
          <div className="course-description">
            <span className="desc">INCLUDES</span>
            <ul>
              <li>Cover all of the IGCSE Biology curriculum</li>
              <li>Classified questions for each topic</li>
              <li>Flash Cards for each topic</li>
              <li>Previous exams solving from previous 10+ years</li>
            </ul>
            <div className="price-container">
              <span className="price-desc">price:</span>
              <span className="price">5000.00 EGP</span>
            </div>
            <div className="course-btn-container btn-container">
              <a className="course-btn btn" href="#">
                Buy now
              </a>
              <a className="course-btn btn" href="#">
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="courses-container">
        <div className="course">
          <div className="course-main">
            <div className="course-info">
              <span className="desc">Course</span>
              <h4>Human Biology O.L</h4>
              <a href="#">View course</a>
            </div>
            <div className="course-tutor">
              <img src="/images/profile.jpg" className="img-tutor" />
              <span className="name-tutor">Abdallah Nagy</span>
            </div>
          </div>
          <div className="course-description">
            <span className="desc">INCLUDES</span>
            <ul>
              <li>Cover all of the IGCSE Biology curriculum</li>
              <li>Classified questions for each topic</li>
              <li>Flash Cards for each topic</li>
              <li>Previous exams solving from previous 10+ years</li>
            </ul>
            <div className="price-container">
              <span className="price-desc">price:</span>
              <span className="price">5000.00 EGP</span>
            </div>
            <div className="course-btn-container btn-container">
              <a className="course-btn btn" href="#">
                Buy now
              </a>
              <a className="course-btn btn" href="#">
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;
