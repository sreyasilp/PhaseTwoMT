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
      <div>
        <h1>Details of {staff.customer_name}</h1>
        <h2>Customer Name : {staff.customer_name}</h2>
        <h2>Contact Person : {staff.contact_person}</h2>
        <h2>Contact Number : {staff.contact_no}</h2>
        <h2>Intrested Product : {staff.intrested_product}</h2>
        <h2>Visit Subject :{staff.visit_subject}</h2>
        <h2>Visit Date :{staff.visit_date}</h2>
        <h2>Is Disabled :{staff.is_disabled}</h2>
        <h2>Is Deleted :{staff.is_deleted}</h2>

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
          Delete Visit
        </button>

        <a href="/stafflist">Back to Visit List</a>
      </div>
    </>
  );
}

export default StaffDetails;
