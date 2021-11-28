import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import UserRegistration from "./Pages/UserRegistration";
import AddVisit from "./Pages/AddVisit";
import Nomatch from "./Pages/No Match";
import VisitList from "./Pages/VisitList";
import VisitDetails from "./Pages/VisitDetails";
import DeleteVisit from "./Pages/VisitDelete";
import VisitEdit from "./Pages/VisitUpdate";
//importing all the components

//applying styles
const mystyle = {
  color: "black",
  backgroundColor: "#d6cbd3",
  fontFamily: "Arial",
};

function Routers() {
  return (
    <div style={mystyle}>
      <Router>
        <h1 style={mystyle} className="text-center  ">
          CRM SYSTEM
        </h1>
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
          {/* checking the localstorage */}
          {localStorage.getItem("mytoken") && (
            <Link className="btn btn-primary mb-2 ms-2" to="/addvisit">
              Add Visits
            </Link>
          )}

          <Link className="btn btn-primary mb-2 ms-2" to="/userregistration">
            {" "}
            Registration{" "}
          </Link>

          {!localStorage.getItem("mytoken") && (
            <Link className="btn btn-primary mb-2 ms-2" to="/login">
              Login
            </Link>
          )}
          {localStorage.getItem("mytoken") && (
            <Link
              className="btn btn-primary mb-2 ms-2"
              onClick={() => (window.location = "/stafflogin")}
              to="/login"
            >
              Logout
            </Link>
          )}
          {/* checking local storage */}
          {localStorage.getItem("mytoken") && (
            <Link className="btn btn-primary mb-2 ms-2" to="/visitlist">
              Visit List
            </Link>
          )}
        </div>
        <hr />
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Nomatch />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addvisit" element={<AddVisit />} />
          <Route path="/visitlist" element={<VisitList />} />
          <Route path="/visitdetails/:id" element={<VisitDetails />} />
          <Route path="/visitedit/:id" element={<VisitEdit />} />
          <Route path="/userregistration" element={<UserRegistration />} />
          <Route path="/visitdelete/:id" element={<DeleteVisit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routers;
