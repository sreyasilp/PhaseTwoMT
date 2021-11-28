import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>;
function Login() {
  localStorage.clear();
  const [inputs, setInputs] = useState({});

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(inputs);

    axios
      .post("http://localhost:3002/login", inputs)
      .then((response) => {
        // if (inputs.role === response.data.users.role) {
        localStorage.setItem("mytoken", response.data.accessToken);
        //   window.location = "/staff-list";
        //   return;
        // } else {
        //   alert("Invalid role");
        //   window.location = "/login";
        // }

        window.location = "/";
        console.log("coorect");
      })
      .catch((error) => {
        localStorage.clear();
        if (error.response) {
          alert(error.response.data);
        }
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div class="container-fluid col-md-11">
        <h2 class="h3 text-black text-center bg-warning">Login</h2>
        <div>
          <label> Enter your Email :</label>
          <input
            class="form-control"
            type="email"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
          />
        </div>

        <div>
          <label> Enter your Password :</label>
          <input
            type="password"
            class="form-control"
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
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
            <option value="Admin">Admin</option>
            <option value="Sales Executive">Sales Executive</option>
          </select>
        </div>

        <div>
          <input
            type="submit"
            value="login"
            class="form-control btn btn-primary mt-3"
          />
        </div>
      </div>
    </form>
  );
}
export default Login;
// // npx json-server --port 3002 .\users.json -m ./node_modules/json-server-auth
// npx json-server --port 3001 --watch staff.json
