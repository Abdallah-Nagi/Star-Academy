import React, { useEffect, useState } from "react";
import "./Courses.css";
import { AiOutlineSearch } from "react-icons/ai";
import biologyImage from "../assets/biology.jpg";
import profile from "../assets/profile.jpg";
import { Link, useLoaderData } from "react-router-dom";
import data from "../db.json";
function Courses() {
  // use as rest API
  // const courses = useLoaderData();
  const courses = data.courses;
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };
  useEffect(() => {
    setResult(
      courses.filter((course) => {
        return (
          course.title.toLowerCase().includes(search) ||
          course.teacher.name.toLowerCase().includes(search)
        );
      })
    );
  }, [search]);
  return (
    <section className="main-courses">
      <div className="main-courses-wrapper">
        <div className="search-container">
          <span className="search-icon">
            <AiOutlineSearch />
          </span>
          <input
            type="text"
            className="search-input"
            placeholder="Math..."
            onChange={handleSearch}
          />
        </div>
        <div className="main-courses-container">
          {result.map((course) => {
            return (
              <Link to={course.id.toString()} key={course.id}>
                <div className="main-course">
                  <img className="course-image" src={course.courseImage} />
                  <div className="course-description">
                    <h4 className="title">{course.title}</h4>
                    <div className="tutor">
                      <img src={course.teacher.image} />
                      <span className="name">{course.teacher.name}</span>
                    </div>
                    <ul className="content-list">
                      <h5>Includes:</h5>
                      {course.content.map((content, index) => {
                        return (
                          <li className="item" key={index + 124134}>
                            <span>{content.description}</span>
                          </li>
                        );
                      })}
                    </ul>
                    <span className="price">{course.price} EGP</span>
                    <div className="course-links">
                      <a href="#" className="main-course-btn">
                        View Course
                      </a>
                      <a href="#" className="main-course-btn">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Courses;
// loader function
export const coursesLoader = async () => {
  const res = await fetch("http://localhost:4000/courses");
  // loader will resolve promise
  return res.json();
};
