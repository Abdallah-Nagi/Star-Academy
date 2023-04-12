import React from "react";
import "./Staff.css";
function Staff() {
  return (
    <section className="staff">
      <a href="#" className="btn">
        Learn from the best!
      </a>
      <div className="staff-container">
        <div className="staff-info">
          <img src="/Images/profile.jpg" />
          <span className="name">Abdallah Nagy</span>
          <span className="desc">Biology Teacher</span>
        </div>
      </div>
    </section>
  );
}

export default Staff;
