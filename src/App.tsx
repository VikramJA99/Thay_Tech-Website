import React from "react";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/home/HomePage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ApplicationSupport from "./components/service/cloud/ApplicationSupport";
import DatabaseSupport from "./components/service/cloud/DatabaseSupport";
import OSSupport from "./components/service/cloud/OSSupport";
import NetworkSupport from "./components/service/cloud/NetworkSupport";
import StaffOutSourcing from "./components/service/outsourcing/StaffOutsourcing";
const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="/ApplicationSupport" element={<ApplicationSupport />} />
          <Route path="/DatabaseSupport" element={<DatabaseSupport />} />
          <Route path="/OSSupport" element={<OSSupport />} />
          <Route path="/NetworkSupport" element={<NetworkSupport />} />
          <Route path="/StaffOutSourcing" element={<StaffOutSourcing />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
