import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import Staff from "./Staff";

function StaffList() {
  const [staffs, setStaffs] = useState([]);

  useEffect(() => {
    console.log("The use effect hook has been executed");

    axios.get("http://localhost:4000/visit").then((response) => {
      console.log("promise fulfilled");
      console.log(response);
      //response object contains the complete HTTP REQUEST WITH the
      //returned data, status code, and headers. We need only the 'data'
      setStaffs(response.data);
    });
  }, []);
  return (
    <>
      <div>
        <h1>Visit List</h1>
        <ul>
          {staffs.map((staff) => (
            <li key={staff.user_id}>
              <Staff details={staff} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function Staff(props) {
  console.log(props);
  return (
    <>
      <div>
        <h4>{props.details.first_name}</h4>
        <button>
          {" "}
          <Link to={`/visitdetails/${props.details.id}`}>view Details</Link>
        </button>
        <br />
        <br />
        {/* <Link to={`/deletestaff/${props.details.id}`}>Delete staff</Link> */}
        {/* {<h4>{props.details.last_name}</h4>}
          <p>{props.details.email}</p>
          <p>{props.details.mobile_no}</p> */}
        {/* <button style={Edit}type="submit">Edit</button>
          <button style={Delete} type="submit">Delete</button> */}
        {/* <p>{props.details.data_of_joining}</p> */}
      </div>
    </>
  );
}

export default StaffList;
