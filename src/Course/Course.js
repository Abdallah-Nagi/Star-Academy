import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import "./Course.css";
import { AiOutlineDown } from "react-icons/ai";
import data from "../db.json";

function Course() {
  const { id } = useParams();
  // Test rest API
  // const course = useLoaderData();

  const course = data.courses.filter((course) => course.id == id)[0];

  return (
    <section className="single-course">
      <div className="hero"></div>
      <div className="main-content">
        <h3 className="course-title">{course.title}</h3>
        <video className="course-video" controls></video>
        <ul className="content-list">
          <li className="item">
            <span className="title">title number 1</span>
            <span className="arrow-down">
              <AiOutlineDown />
            </span>

            <ul className="sub-list">
              <li className="sub-item">Subitem 1</li>
              <li className="sub-item">Subitem 2</li>
              <li className="sub-item">Subitem 3</li>
            </ul>
          </li>
          <li className="item">
            <span className="title">title number 2</span>
            <span className="arrow-down">
              <AiOutlineDown />
            </span>
          </li>
          <li className="item">
            <span className="title">title number 3</span>
            <span className="arrow-down">
              <AiOutlineDown />
            </span>
          </li>
          <li className="item">
            <span className="title">title number 4</span>
            <span className="arrow-down">
              <AiOutlineDown />
            </span>
          </li>
          <li className="item">
            <span className="title">title number 5</span>
            <span className="arrow-down">
              <AiOutlineDown />
            </span>
          </li>
          <li className="item">
            <span className="title">title number 5</span>
            <span className="arrow-down">
              <AiOutlineDown />
            </span>
          </li>
          <li className="item">
            <span className="title">title number 5</span>
            <span className="arrow-down">
              <AiOutlineDown />
            </span>
          </li>
          <li className="item">
            <span className="title">title number 5</span>
            <span className="arrow-down">
              <AiOutlineDown />
            </span>
          </li>
          <li className="item">
            <span className="title">title number 5</span>
            <span className="arrow-down">
              <AiOutlineDown />
            </span>
          </li>
          <li className="item">
            <span className="title">title number 5</span>
            <span className="arrow-down">
              <AiOutlineDown />
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Course;

export const singleCourseLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:4000/courses/" + id);
  return res.json();
};
