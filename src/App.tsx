import React from "react";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/home/HomePage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDevelopment from "./components/service/development/ProductDevelopment";
import ContactUs from "./components/service/contact/ContactUs";
import AboutAs from "./components/service/about_us/AboutUs";
import SlideShow from "./components/service/header/SlideShow";

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
          <Route path="/AboutUs" element={<AboutAs />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
