import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import "./Course.css";
import { AiOutlineRight } from "react-icons/ai";
import data from "../db.json";

function Course() {
  const { id } = useParams();
  const course = data.courses.filter((course) => course.id == id)[0];
  // states
  const [currentChapter, setCurrentChapter] = useState(0);
  const [viewChapters, setViewChapters] = useState([1]);
  // functions
  const handleView = (number) => {
    const view = viewChapters.map((chapter) => chapter);
    if (!view.includes(number)) {
      setViewChapters([...view, number]);
    } else {
      const removeIndex = view.indexOf(number);
      view.splice(removeIndex, 1);
      setViewChapters(view);
    }
  };
  // Test rest API
  // const course = useLoaderData();

  console.log(course.content[currentChapter].chapterName);
  console.log("viewchapter:" + viewChapters);
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
          {/* iterate over course */}
          {course.content.map((course, index) => {
            const { chapterName, chapterNumber, chapterContent } = course;
            return (
              <li
                className="item"
                key={"12451423" + index}
                onClick={() => handleView(chapterNumber - 1)}
              >
                <span>{chapterNumber}) </span>
                <span className="title">{chapterName}</span>
                <span
                  className={`arrow-down
                   ${viewChapters.includes(index) && "current"}`}
                >
                  <AiOutlineRight />
                </span>
                <ul
                  className={`sub-list ${
                    viewChapters.includes(index) && "current"
                  }`}
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
