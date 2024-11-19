import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Ensure Routes is imported
import LoginForm from './components/common/login/LoginForm';
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import Loader from "./components/common/loader/Loader";
import AuthForm from "./components/common/login/AuthForm";
import CourseDetails from "./components/coursedetails/CourseDetails";
import OnlineCourses from "./components/allcourses/OnlineCourses";
import AboutCard from "./components/about/AboutCard";
import DetailPage from "./components/about/DetailPage";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate loading with a timeout, or replace with actual data loading logic
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <Header />
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<CourseHome />} />
        <Route path="/team" element={<Team />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/journal" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<OnlineCourses />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/" element={<AboutCard />} />
        <Route path="/details/:id" element={<DetailPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
