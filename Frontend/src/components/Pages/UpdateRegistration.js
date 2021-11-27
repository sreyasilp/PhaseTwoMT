import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function UserEdit() {
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
    <div class="container-fluid col-md-11">
      <h2 class="h3 text-black text-center bg-warning">
        Update Registration Form
      </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label> Enter your User Name :</label>
          <input
            type="text"
            class="form-control"
            name="first_name"
            value={inputs.first_name || ""}
            onChange={handleChange}
          />
        </div>

        <div>
          <label> Enter your Email :</label>
          <input
            type="email"
            class="form-control"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
            required
          />
        </div>
        {/* 
        <div>
          <label> Enter your Password :</label>
          <input
            class="form-control"
            type="password"
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
            required
          />
        </div> */}

        <div>
          <label> Enter User Type:</label>
          <input
            type="text"
            class="form-control"
            name="last_name"
            value={inputs.last_name || ""}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label> Enter User Type:</label>
          <input
            type="text"
            class="form-control"
            name="last_name"
            value={inputs.last_name || ""}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <input type="Submit" class="form-control btn btn-primary mt-3" />

          <input
            type="reset"
            class="form-control btn btn-danger mt-3"
            value="Cancel"
          />
        </div>
      </form>
    </div>
  );
}

export default UserEdit;
