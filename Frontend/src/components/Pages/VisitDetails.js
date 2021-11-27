import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function VisitDetails() {
  //initialize the use case to empty
  const [staff, setVisit] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/staff/${id}`).then((response) => {
      console.log("promise was fullfilled");
      console.log(response);
      setVisit(response.data);
    });
  }, []);

  return (
    <>
      <div>
        <h1>Details of {staff.first_name}</h1>
        <h2>First Name : {staff.first_name}</h2>
        <h2>Last Name : {staff.last_name}</h2>
        <h2>Email : {staff.email}</h2>
        <h2>Phone No : {staff.mobile_no}</h2>
        <h2>Date of joining:{staff.Date}</h2>
        <button
          type="button"
          onClick={() => navigate(`/visitedit/${staff.id}`)}
        >
          Edit Visit
        </button>
        <button
          type="button"
          onClick={() => navigate(`/visitdelete/${staff.id}`)}
        >
          Delete Staff
        </button>

        <a href="/visitlist">Back to Visit List</a>
      </div>
    </>
  );
}

export default VisitDetails;
