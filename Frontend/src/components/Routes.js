import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import UserRegistration from "./Pages/UserRegistration";
import Register from "./Pages/Registration";
import Nomatch from "./Pages/No Match";
import StaffList from "./Pages/Stafflist";
import StaffDetails from "./Pages/Staff Details";
// import StaffEdit from "./Pages/Staff Edit";
import DeleteStaff from "./Pages/Staffdelete";
import UserEdit from "./Pages/UpdateRegistration";

function Routers() {
  return (
    <Router>
      <h1 className="text-center  ">CRM SYSTEM</h1>
      <h3 className="text-center ">Training Academy Management System</h3>
      <div>
        <hr />
        <Link className="btn btn-primary mb-2 ms-2" to="/">
          Home
        </Link>

        <Link className="btn btn-primary mb-2 ms-2 " to="/about">
          About Us
        </Link>

        <Link className="btn btn-primary mb-2 ms-2" to="/contact">
          Contact Us
        </Link>

        <Link className="btn btn-primary mb-2 ms-2" to="/staffreg">
          Visits Reg
        </Link>

        {localStorage.getItem("mytoken") && (
          <Link className="btn btn-primary mb-2 ms-2" to="/userregistration">
            {" "}
            Registration{" "}
          </Link>
        )}
        {!localStorage.getItem("mytoken") && (
          <Link className="btn btn-primary mb-2 ms-2" to="/stafflogin">
            Login
          </Link>
        )}
        {localStorage.getItem("mytoken") && (
          <Link
            className="btn btn-primary mb-2 ms-2"
            onClick={() => (window.location = "/stafflogin")}
            to="/stafflogin"
          >
            Logout
          </Link>
        )}

        {localStorage.getItem("mytoken") && (
          <Link className="btn btn-primary mb-2 ms-2" to="/stafflist">
            Staff List
          </Link>
        )}
        {/* 
        <Link className="btn btn-primary mb-2 ms-2" to="/stafflogin">
          Login
        </Link>

        <Link className="btn btn-primary mb-2 ms-2" to="/staffreg">
          Register
        </Link> */}
        {/* 
        <Link className="btn btn-primary mb-2 ms-2" to="/stafflist">
          Staff List
        </Link> */}
      </div>
      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Nomatch />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/stafflogin" element={<Login />} />
        <Route path="/userregistration" element={<UserRegistration />} />
        <Route path="/staffreg" element={<Register />} />
        {/* <Route path="/regedit" element={<UserEdit />} /> */}
        <Route path="/stafflist" element={<StaffList />} />
        <Route path="/staffdetails/:id" element={<StaffDetails />} />
        <Route path="/useredit/:id" element={<UserEdit />} />
        <Route path="/staffdelete/:id" element={<DeleteStaff />} />
      </Routes>
    </Router>
  );
}

export default Routers;
