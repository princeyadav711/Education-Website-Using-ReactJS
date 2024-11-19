import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);

  const handleMenuToggle = () => {
    setClick(!click);
  };

  const handleMenuClose = () => {
    setClick(false);
  };

  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul className={click ? "mobile-nav" : "flexSB"}>
            <li onClick={handleMenuClose}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={handleMenuClose}>
              <Link to="/courses">All Courses</Link>
            </li>
            <li onClick={handleMenuClose}>
              <Link to="/about">About</Link>
            </li>
            <li onClick={handleMenuClose}>
              <Link to="/team">Team</Link>
            </li>
            <li onClick={handleMenuClose}>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li onClick={handleMenuClose}>
              <Link to="/journal">Journal</Link>
            </li>
            <li onClick={handleMenuClose}>
              <Link to="/contact">Contact</Link>
            </li>
            <li onClick={handleMenuClose}>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          <div className="start">
            <div className="button">GET CERTIFICATE</div>
          </div>
          <button className="toggle" onClick={handleMenuToggle}>
            {click ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
