import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// function DeleteStaff(props) {
//   const { id } = useParams();
//   alert("User Details were updated!");
//   return axios
//     .delete(`http://localhost:3001/staff/${props.id}`)
//     .then((response) => console.log("Delete Successful"))
//     .catch((error) => console.log(error));
// }

function DeleteStaff() {
  const [staff, setStaff] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    console.log("The use effect hook has been executed");

    axios.delete(`http://localhost:4000/visit/${id}`).then((response) => {
      console.log("Promise fulfilled");
      console.log(response);
      //response object contains the complete HTTP REQUEST with
      //returned data, status code, and headers. We need only 'data'
      setStaff(response.data);
    });
    window.location = "/visitlist";
  }, []);

  return (
    <>
      <div>
        <h1>Staff Deleted</h1>
        {/* <h2>First Name:{staff.first_name}</h2>
          <h2>Last Name:{staff.last_name}</h2>
          <h2>Email:{staff.email}</h2>
          <h2>Mobile Number:{staff.mobile_no}</h2>
      
           */}
      </div>
    </>
  );
}
export default DeleteStaff;
