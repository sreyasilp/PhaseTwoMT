import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>;

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
    axios.get(`http://localhost:4000/visit/${props.id}`).then((response) => {
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
      .put(`http://localhost:4000/visit/${props.id}`, inputs)
      .then((response) => {
        console.log(response);
        alert("Visit Details were updated Successfully!");
        window.location = "/visitlist";
      });
  }
  return (
    <div class="container-fluid col-md-11">
      <h2 class="h3 text-black text-center bg-warning">Add Visit</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label> Customer Name :</label>
          <input
            type="text"
            class="form-control"
            name="customer_name"
            value={inputs.customer_name || ""}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Contact Person :</label>
          <input
            class="form-control"
            type="text"
            name="contact_person"
            value={inputs.contact_person || ""}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Contact Number :</label>
          <input
            type="tel"
            class="form-control"
            name="contact_no"
            value={inputs.contact_no || ""}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Intrested Product :</label>
          <input
            type="text"
            class="form-control"
            name="intrested_product"
            value={inputs.intrested_product || ""}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Visit Subject :</label>
          <input
            type="text"
            class="form-control"
            name="visit_subject"
            value={inputs.visit_subject || ""}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label> Description :</label>
          <input
            class="form-control"
            type="text"
            name="description"
            value={inputs.description || ""}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label> Visit Date :</label>
          <input
            class="form-control"
            type="date"
            name="visit_date"
            value={inputs.visit_date || ""}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label> Is Disabled :</label>
          <input
            class="form-control"
            type="text"
            name="is_disabled"
            value={inputs.is_disabled || ""}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label> Is Deleted :</label>
          <input
            class="form-control"
            type="text"
            name="is_deleted"
            value={inputs.is_deleted || ""}
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

export default StaffEdit;
