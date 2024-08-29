import React from "react";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/home/HomePage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDevelopment from "./components/service/development/ProductDevelopment";
import ContactUs from "./components/service/contact/ContactUs";
import SlideShow from "./components/service/header/SlideShow";
import WhyUs from "./components/service/about_us/WhyUS";
import AboutUs from "./components/service/about_us/AboutUs";
import Services from "./components/service/about_us/Services";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="/ProductDevelopment" element={<ProductDevelopment />} />
          <Route path="/Slideshow" element={<SlideShow />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/WhyUs" element={<WhyUs />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
