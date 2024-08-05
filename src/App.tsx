import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
// import ContactSection from "./components/ContactSection";
import ContactForm from "./components/elementalComponent/ContactForm";
import Footer from "./components/Footer";
// import Home from "./components/Home";
import Service from "./components/Services";

const Home: React.FC = () => (
  <div>
    <Banner />
  </div>
);
const About: React.FC = () => <div>About Us Page</div>;
const Services: React.FC = () => (
  <div>
    <Service />
  </div>
);
const Solutions: React.FC = () => <div>Solutions Page</div>;
const CaseStudies: React.FC = () => <div>Case Studies Page</div>;
const Blog: React.FC = () => <div>Blog Page</div>;
const Contact: React.FC = () => (
  <div>
    <ContactForm />
  </div>
);
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
      <Footer />
    </Router>
  );
};

export default App;
