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
  const [viewChapters, setViewChapters] = useState([
    0,
    course.content[0].chapterContent[0].title,
  ]);
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
    // console.log(currentChapter);
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
        <h4 className="course-chapter">
          {`${currentChapter.chapter.chapterName} / ${currentChapter.subChapter.title}`}
        </h4>
        {currentChapter.subChapter.title !== "Flash Cards" ? (
          <>
            <p>This is a video for {currentChapter.chapter.chapterName}</p>
            <video className="display-content video">
              <source
                src={currentChapter.subChapter.source}
                type="video/mp4"
                play
              />
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
              <li className="item" key={"12451423" + index}>
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
                            className="sub-item-header"
                            onClick={() => handleView(chapterHeader.title)}
                          >
                            <span
                              className={`arrow-down ${
                                viewChapters.includes(chapterHeader.title) &&
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
                                viewChapters.includes(chapterHeader.title) &&
                                "current"
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
