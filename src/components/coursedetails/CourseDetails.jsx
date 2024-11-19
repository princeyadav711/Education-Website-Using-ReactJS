import React from "react";
import { useParams } from "react-router-dom";
import { online } from "../../dummydata";
import "./CourseDetails.css"

const CourseDetails = () => {
  const { id } = useParams();
  const course = online.find((item) => item.id === parseInt(id));

  if (!course) return <p>Course not found</p>;

  return (
    <div className="course-details">
      <h1>{course.courseName}</h1>
      <img src={course.cover} alt={course.courseName} />
      <p>{course.description}</p>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p><strong>Level:</strong> {course.level}</p>
      <p><strong>Price:</strong> {course.price}</p>
    </div>
  );
};

export default CourseDetails;
