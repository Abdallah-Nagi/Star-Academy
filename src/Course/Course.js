import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import "./Course.css";
import { AiOutlineRight } from "react-icons/ai";
import data from "../db.json";
import video from "../assets/video.mp4";
function Course() {
  console.log(video);
  const { id } = useParams();
  const course = data.courses.filter((course) => course.id == id)[0];
  // states
  const [currentChapter, setCurrentChapter] = useState({
    chapter: course.content[0],
    subChapter: course.content[0].chapterContent[0],
  });
  const [viewChapters, setViewChapters] = useState([]);
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
  const handleCurrentChapter = (chapter, subChapter) => {
    setCurrentChapter({
      chapter: chapter,
      subChapter: subChapter,
    });
    window.scrollTo(0, 0);
    setViewChapters([]);
    console.log(viewChapters);
    // setCurrentChapter({ chapter: chapter, subChapter: subChapter });
  };
  // Test rest API
  // const course = useLoaderData();

  console.log("viewchapter:" + viewChapters);
  // console.log(course.content[0].chapterContent);
  return (
    <section className="single-course">
      <div className="hero"></div>
      <div className="main-content">
        <h3 className="course-title">{course.title}</h3>
        <h4 className="course-chapter">{currentChapter.chapter.chapterName}</h4>
        <ul className="course-nav">
          {currentChapter.chapter.chapterContent.map((subChapter) => {
            return (
              <li
                className={`${
                  currentChapter.subChapter.title == subChapter.title &&
                  "active"
                }`}
                onClick={() =>
                  handleCurrentChapter(currentChapter.chapter, subChapter)
                }
              >
                {subChapter.title}
              </li>
            );
          })}
        </ul>
        {/* check if current display is video or flash cards */}
        {currentChapter.subChapter.title !== "Flash Cards" ? (
          <>
            <video className="display-content video" controls>
              <source src={video} type="video/mp4" play />
            </video>
          </>
        ) : (
          <div className="display-content flash-cards-container">
            Flash Card Questions
          </div>
        )}
        <ul className="content-list">
          {/* iterate over course */}
          {course.content.map((course, index) => {
            const { chapterName, chapterNumber, chapterContent } = course;
            return (
              <li
                className={`item ${
                  currentChapter.chapter.chapterName == chapterName && "active"
                }`}
                key={"12451423" + index}
              >
                <div
                  className="chapter-header"
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
                </div>
                <ul
                  className={`sub-list ${
                    viewChapters.includes(index) && "current"
                  }`}
                >
                  {/* iterate over content of chapter */}
                  {chapterContent.map((chapterHeader, index) => {
                    return (
                      <>
                        <li className="sub-item">
                          <div
                            className={`sub-item-header ${
                              currentChapter.subChapter.id ==
                                chapterHeader.id && "active"
                            }`}
                            onClick={() => handleView(chapterHeader.id)}
                          >
                            <span
                              className={`arrow-down ${
                                viewChapters.includes(chapterHeader.id) &&
                                "current"
                              }`}
                            >
                              <AiOutlineRight />
                            </span>
                            <span className="title">{chapterHeader.title}</span>
                            <span className="duration">
                              ({chapterHeader.duration})
                            </span>
                          </div>
                          {
                            <ul
                              className={`sub-list-details ${
                                viewChapters.includes(chapterHeader.id) &&
                                "current"
                              } ${
                                currentChapter.subChapter.id ==
                                  chapterHeader.id && "active"
                              }`}
                            >
                              <li
                                className="detail-item video-link"
                                onClick={() =>
                                  handleCurrentChapter(course, chapterHeader)
                                }
                              >
                                Display chapter
                              </li>
                              {/* iterate over details of chapter if present */}
                              {chapterHeader.subContent &&
                                chapterHeader.subContent.map(
                                  (chapterDetails) => {
                                    return (
                                      <li className="detail-item">
                                        <span>{chapterDetails.name}</span>
                                        <span className="duration">
                                          ({chapterDetails.timeStamp})
                                        </span>
                                      </li>
                                    );
                                  }
                                )}
                            </ul>
                          }
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
