import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/loginPage/Login";
import Home from "./pages/homePage/Home";
import Fees from "./pages/FeesPage/Fees"; // ✅ NEW IMPORT
import Result from "./pages/resultPage/Result";
import Subjects from "./pages/subjectsPage/Subjects";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        
        {/* ✅ NEW FEES ROUTE */}
        <Route path="/fees" element={<Fees />} />


        <Route path="/result" element={<Result />} />

        <Route path="/subjects" element={<Subjects />} />



        {/* ✅ OPTIONAL: fallback route */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;