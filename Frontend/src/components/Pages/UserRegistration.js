import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>;

function UserRegistration() {
  const [inputs, setInputs] = useState({});

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  }

  function handleSubmit(event) {
    //to prevent default html form submit behaviour
    event.preventDefault();
    //alert the current state
    console.log(inputs);
    axios.post("http://localhost:3002/register", inputs).then((response) => {
      console.log("promise was fullfilled");
      console.log(response);
      window.location = "/";
    });
  }

  return (
    //form for registration
    <div class="container-fluid col-md-11">
      <h2 class="h3 text-black text-center bg-warning">
        User Registration Form
      </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label> First Name :</label>
          <input
            type="text"
            class="form-control"
            name="first_name"
            value={inputs.first_name || ""}
            onChange={handleChange}
          />
        </div>

        <div>
          <label> Last Name :</label>
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
        </div>

        <div>
          <label> Enter Your Age:</label>
          <input
            type="number"
            class="form-control"
            name="age"
            value={inputs.age || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label> Enter your Gender :</label>
          <input
            type="text"
            class="form-control"
            name="gender"
            value={inputs.gender || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label> Enter your Address :</label>
          <input
            type="text"
            class="form-control"
            name="address"
            value={inputs.address || ""}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label> Enter your Phone Number :</label>
          <input
            type="tel"
            class="form-control"
            name="phone"
            value={inputs.phone || ""}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label for="role">Choose a Role:</label>

          <select
            name="role"
            class="form-control"
            id="cars"
            value={inputs.role || ""}
            onChange={handleChange}
            required
          >
            <option value="">--choose --</option>
            <option value="Sales Co-ordinator">Sales Co-ordinator</option>
            <option value="Sales Executive">Sales Executive</option>
          </select>
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

export default UserRegistration;
