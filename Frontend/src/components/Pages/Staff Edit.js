import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function StaffEdit() {
  const { id } = useParams();
  return (
    <>
      <MyForm id={id} />
    </>
  );
}

function MyForm(props) {
  const [inputs, setInputs] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:3001/staff/${props.id}`).then((response) => {
      console.log(response);
      setInputs(response.data);
    });
  }, []);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(inputs);
    axios
      .put(`http://localhost:3001/staff/${props.id}`, inputs)
      .then((response) => {
        console.log(response);
        alert("User Details were updated!");
      });
  }
  return (
    <div className="mainBody">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <label>Enter your Email: </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={inputs.email || ""}
          />
        </div>

        <div className="row">
          <label>Enter your password: </label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={inputs.password || ""}
          />
        </div>

        {/* <div className="row">
          <label>Confirm password: </label>
          <input
            type="password"
            name="confirmpassword"
            onChange={handleChange}
            value={inputs.confirmpassword || ""}
          />
        </div> */}

        <div className="row">
          <label>Enter your First Name: </label>
          <input
            type="text"
            name="first_name"
            onChange={handleChange}
            value={inputs.first_name || ""}
          />
        </div>

        <div className="row">
          <label>Enter your Last Name: </label>
          <input
            type="text"
            name="last_name"
            onChange={handleChange}
            value={inputs.last_name || ""}
          />
        </div>

        <div className="row">
          <label>Enter your Mobile Number: </label>
          <input
            type="number"
            name="mobile_no"
            onChange={handleChange}
            value={inputs.mobile_no || ""}
          />
        </div>

        <div className="row">
          <label>Date of joining: </label>
          <input
            type="date"
            name="date"
            onChange={handleChange}
            value={inputs.date || ""}
          />
        </div>

        <div className="row">
          <input type="submit" className="btn" />
          <input type="reset" value="cancel" className="btnCancel" />
        </div>
      </form>
    </div>
  );
}

export default StaffEdit;
