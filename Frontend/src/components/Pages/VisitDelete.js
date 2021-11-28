import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function DeleteVisit() {
  const [staff, setStaff] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    console.log("The use effect hook has been executed");
    //delete api
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
      </div>
    </>
  );
}
export default DeleteVisit;
