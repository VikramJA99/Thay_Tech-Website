import React from "react";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/home/HomePage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDevelopment from "./components/service/development/ProductDevelopment";
import OnlineOfflineTraining from "./components/service/software_training/OnlineOfflineTraining";
import ContactUs from "./components/service/contact/ContactUs";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="/ProductDevelopment" element={<ProductDevelopment />} />
          <Route
            path="/OnlineOfflineTraining"
            element={<OnlineOfflineTraining />}
          />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
