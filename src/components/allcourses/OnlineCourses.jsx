import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./courses.css";
import { online } from "../../dummydata";
import Heading from "../common/heading/Heading";

const OnlineCourses = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = online.filter((course) =>
    course.courseName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="online">
      <div className="container">
        <Heading subtitle="COURSES" title="Browse Our Online Courses" />

        <div className="search-bar">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </div>

        <div className="content grid3">
          {filteredCourses.map((val) => (
            <Link to={`/course/${val.id}`} key={val.id} className="box">
              <div className="img">
                <img src={val.cover} alt={val.courseName} />
                <img src={val.hoverCover} alt={val.courseName} className="show" />
              </div>
              <h1>{val.courseName}</h1>
              <span>{val.course}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnlineCourses;
