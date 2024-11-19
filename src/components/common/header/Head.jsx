import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Head = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <a href="/">
              <h1>BRIGHTMIND</h1>
              <span>ONLINE EDUCATION & LEARNING</span>
            </a>
          </div>


          {/* Search Bar */}
          <div className='search-bar'>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          <div className='social'>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className='fab fa-facebook-f icon'></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className='fab fa-instagram icon'></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className='fab fa-twitter icon'></i>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <i className='fab fa-youtube icon'></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
