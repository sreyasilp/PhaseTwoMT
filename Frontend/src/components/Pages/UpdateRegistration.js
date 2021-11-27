// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// function UserEdit() {
//   const { id } = useParams();
//   return (
//     <>
//       <MyForm id={id} />
//     </>
//   );
// }

// function MyForm(props) {
//   const [inputs, setInputs] = useState({});
//   useEffect(() => {
//     axios
//       .get(`http://localhost:3002/userregistration/${props.id}`)
//       .then((response) => {
//         console.log(response);
//         setInputs(response.data);
//       });
//   }, []);

//   function handleChange(event) {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs((values) => ({ ...values, [name]: value }));
//   }
//   function handleSubmit(event) {
//     event.preventDefault();
//     console.log(inputs);
//     axios
//       .put(`http://localhost:3002/userregistration/${props.id}`, inputs)
//       .then((response) => {
//         console.log(response);
//         alert("User Details were updated!");
//       });
//   }
//   return (
//     <div class="container-fluid col-md-11">
//       <h2 class="h3 text-black text-center bg-warning">
//         User Registration Form
//       </h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label> First Name :</label>
//           <input
//             type="text"
//             class="form-control"
//             name="first_name"
//             value={inputs.first_name || ""}
//             onChange={handleChange}
//           />
//         </div>

//         <div>
//           <label> Last Name :</label>
//           <input
//             type="text"
//             class="form-control"
//             name="last_name"
//             value={inputs.last_name || ""}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label> Enter your Email :</label>
//           <input
//             type="email"
//             class="form-control"
//             name="email"
//             value={inputs.email || ""}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label> Enter your Password :</label>
//           <input
//             class="form-control"
//             type="password"
//             name="password"
//             value={inputs.password || ""}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label> Enter Your Age:</label>
//           <input
//             type="number"
//             class="form-control"
//             name="age"
//             value={inputs.age || ""}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label> Enter your Gender :</label>
//           <input
//             type="text"
//             class="form-control"
//             name="gender"
//             value={inputs.gender || ""}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label> Enter your Address :</label>
//           <input
//             type="text"
//             class="form-control"
//             name="address"
//             value={inputs.address || ""}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label> Enter your Phone Number :</label>
//           <input
//             type="tel"
//             class="form-control"
//             name="phone"
//             value={inputs.phone || ""}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         {/* <div>
//         <label> Enter User Role:</label>
//         <input
//           type="text"
//           class="form-control"
//           name="role"
//           value={inputs.role || ""}
//           onChange={handleChange}
//           required
//         />
//       </div> */}

//         <div>
//           <label for="role">Choose a Role:</label>

//           <select
//             name="role"
//             class="form-control"
//             id="cars"
//             value={inputs.role || ""}
//             onChange={handleChange}
//             required
//           >
//             <option value="Admin">Admin</option>
//             <option value="Sales Executive">Sales Executive</option>
//           </select>
//         </div>

//         <div>
//           <input type="Submit" class="form-control btn btn-primary mt-3" />

//           <input
//             type="reset"
//             class="form-control btn btn-danger mt-3"
//             value="Cancel"
//           />
//         </div>
//       </form>
//     </div>
//   );
// }

// export default UserEdit;
