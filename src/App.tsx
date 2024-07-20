import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
// import Home from "./components/Home";

const Home: React.FC = () => (
  <div>
    <Banner />
  </div>
);
const About: React.FC = () => <div>About Us Page</div>;
const Services: React.FC = () => <div>Services Page</div>;
const Solutions: React.FC = () => <div>Solutions Page</div>;
const CaseStudies: React.FC = () => <div>Case Studies Page</div>;
const Blog: React.FC = () => <div>Blog Page</div>;
const Contact: React.FC = () => <div>Contact Us Page</div>;
const Book: React.FC = () => <div>Book a Meeting Page</div>;

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </Router>
  );
};

export default App;
