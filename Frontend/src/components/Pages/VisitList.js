import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import bootstrap 
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>;

function StaffList() {
  const [staffs, setStaffs] = useState([]);

  useEffect(() => {
    console.log("The use effect hook has been executed");
    //get api gettin the visit 
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
      <div className="text-center">
        <h3>Visit List</h3>
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
      <div className="text-center">
        <h5>{props.details.customer_name}</h5>{" "}
        <Link
          className="btn btn-primary"
          to={`/visitdetails/${props.details.id}`}
        >
          View Details
        </Link>
        <br />
      </div>
    </>
  );
}

export default StaffList;
