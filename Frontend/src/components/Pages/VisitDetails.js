import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>;

function StaffDetails() {
  //initialize the use case to empty
  const [staff, setStaff] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:4000/visit/${id}`).then((response) => {
      console.log("promise was fullfilled");
      console.log(response);
      setStaff(response.data);
    });
  }, []);

  return (
    <>
      <div className="text-center">
        <div className="card">
          <h1>Details of {staff.customer_name}</h1>
          <p>Customer Name : {staff.customer_name}</p>
          <p>Contact Person : {staff.contact_person}</p>
          <p>Contact Number : {staff.contact_no}</p>
          <p>Intrested Product : {staff.intrested_product}</p>
          <p>Visit Subject :{staff.visit_subject}</p>
          <p>Visit Date :{staff.visit_date}</p>
          <p>Is Disabled :{staff.is_disabled}</p>
          <p>Is Deleted :{staff.is_deleted}</p>

          <button
            className="btn btn-warning"
            type="button"
            onClick={() => navigate(`/visitedit/${staff.id}`)}
          >
            Edit Visit
          </button>
          <button
            className="btn btn-danger"
            type="button"
            onClick={() => navigate(`/visitdelete/${staff.id}`)}
          >
            Delete Visit
          </button>
          <br />
          <br />

          <a className="link-primary" href="/stafflist">
            Back to Visit List
          </a>
        </div>
      </div>
    </>
  );
}

export default StaffDetails;
