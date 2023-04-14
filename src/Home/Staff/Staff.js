import React from "react";
import "./Staff.css";
import profile from "../../../src/assets/profile.jpg";
function Staff() {
  return (
    <section className="staff">
      <div className="btn-container">
        <a className="btn btn-staff">Learn from the best!</a>
      </div>
      <div className="staff-container">
        <div className="person">
          <img src={profile} />
          <span className="name">Abdallah Nagy</span>
          <span className="desc">Biology Teacher</span>
        </div>
        <div className="person">
          <img src={profile} />
          <span className="name">Abdallah Nagy</span>
          <span className="desc">Biology Teacher</span>
        </div>
        <div className="person">
          <img src={profile} />
          <span className="name">Abdallah Nagy</span>
          <span className="desc">Biology Teacher</span>
        </div>
        <div className="person">
          <img src={profile} />
          <span className="name">Abdallah Nagy</span>
          <span className="desc">Biology Teacher</span>
        </div>
      </div>
    </section>
  );
}

export default Staff;
