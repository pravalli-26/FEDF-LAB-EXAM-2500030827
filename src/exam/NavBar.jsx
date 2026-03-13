import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Registration from "./Registration";
import ViewStudents from "./ViewStudents";
import ApiDemo from "./ApiDemo";

import "./style.css";

function Navbar() {
  return (
    <div>

      

      <div className="navbar">

        <Link to="/">Home</Link>

        <Link to="/registration">Registration</Link>

        <Link to="/viewstudents">View Students</Link>

        <Link to="/apidemo">Api Demo</Link>

      </div>

      

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/registration" element={<Registration />} />

        <Route path="/viewstudents" element={<ViewStudents />} />

        <Route path="/apidemo" element={<ApiDemo />} />

      </Routes>

    </div>
  );
}

export default Navbar;
