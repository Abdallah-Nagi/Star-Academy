import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import "./Course.css";
import { AiOutlineRight } from "react-icons/ai";
import data from "../db.json";

function Course() {
  const { id } = useParams();
  const [currentChapter, setCurrentChapter] = useState(0);
  const handleClick = (number) => {
    // console.log(number - 1);
    setCurrentChapter(number - 1);
  };
  // Test rest API
  // const course = useLoaderData();

  const course = data.courses.filter((course) => course.id == id)[0];
  console.log(course.content[currentChapter].chapterName);
  // console.log(course.content[0].chapterContent);
  return (
    <section className="single-course">
      <div className="hero"></div>
      <div className="main-content">
        <h3 className="course-title">{course.title}</h3>
        <h4 className="course-chapter">
          {course.content[currentChapter].chapterName}
        </h4>
        <video className="course-video" controls></video>
        <ul className="content-list">
          {course.content.map((course, index) => {
            const { chapterName, chapterNumber, chapterContent } = course;
            return (
              <li
                className="item"
                key={"12451423" + index}
                onClick={() => handleClick(chapterNumber)}
              >
                <span>{chapterNumber}) </span>
                <span className="title">{chapterName}</span>
                <span
                  className={`arrow-down ${
                    index == currentChapter && "current"
                  }`}
                >
                  <AiOutlineRight />
                </span>
                <ul
                  className={`sub-list ${index == currentChapter && "current"}`}
                >
                  {chapterContent.map((chapterItem, index) => {
                    return (
                      <>
                        <li className="sub-item">
                          <span
                            className={`arrow-down ${index == 0 && "current"}`}
                          >
                            <AiOutlineRight />
                          </span>
                          <span className="title">{chapterItem.title}</span>
                          <span className="duration">
                            ({chapterItem.duration})
                          </span>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Course;

export const singleCourseLoader = async ({ params }) => {
  const { id } = params;
  // const res = await fetch("http://localhost:4000/courses/" + id);
  // return res.json();
  return null;
};
