import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./courses.css";
import { coursesCard } from "../../dummydata";

const CoursesCard = () => {
  return (
    <>
      <section className='coursesCard'>
        <div className='container grid2'>
          {coursesCard.map((val) => (
            <div className='items' key={val.id}> {/* Ensure to add a key for each item */}
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>{val.coursesName}</h1>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <label htmlFor=''> (5.0)</label>
                  </div>
                  <div className='details'>
                    {val.courTeacher.map((details) => (
                      <div className='box' key={details.id}> {/* Ensure to add a key for each teacher */}
                        <div className='dimg'>
                          <img src={details.dcover} alt='' />
                        </div>
                        <div className='para'>
                          <h4>{details.name}</h4>
                        </div>
                        <span>{details.totalTime}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className='price'>
                <h3>
                  {val.priceAll} / {val.pricePer}
                </h3>
              </div>
              <div className='button'>
                {/* Link GET STARTED NOW button to login page */}
                <Link to="/login">
                  <button className='primary-btn'>
                    GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                  </button>
                </Link>
                <Link to={`/view-course/${val.id}`}>
                  <button>
                    VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default CoursesCard;
