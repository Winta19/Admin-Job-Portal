// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function CreateNewUsers() {
//   const [formData, setFormData] = useState({
//     fname: "",
//     lname: "",
//     password: "",
//     roleId: "",
//   });

//   const navigate = useNavigate();

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:3000/users", formData);
//       alert("User created successfully!");
//       navigate("/users"); // Redirect back to the users list
//     } catch (error) {
//       console.error("Error creating user:", error);
//       alert("Failed to create user. Please try again.");
//     }
//   };

//   return (
//     <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md">
//       <h1 className="text-2xl font-bold mb-4">Create New User</h1>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* First Name */}
//         <div>
//           <label className="block text-gray-700">First Name</label>
//           <input
//             type="text"
//             name="fname"
//             value={formData.fname}
//             onChange={handleChange}
//             required
//             className="w-full border p-2 rounded"
//           />
//         </div>

//         {/* Last Name */}
//         <div>
//           <label className="block text-gray-700">Last Name</label>
//           <input
//             type="text"
//             name="lname"
//             value={formData.lname}
//             onChange={handleChange}
//             required
//             className="w-full border p-2 rounded"
//           />
//         </div>

//         {/* Password */}
//         {/* <div>
//           <label className="block text-gray-700">Password</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             className="w-full border p-2 rounded"
//           />
//         </div> */}

//         {/* Role ID */}
//         <div>
//           <label className="block text-gray-700">Role ID</label>
//           <input
//             type="number"
//             name="roleId"
//             value={formData.roleId}
//             onChange={handleChange}
//             required
//             className="w-full border p-2 rounded"
//           />
//         </div>

//         {/* Submit Button */}
//         <div className="flex gap-4">
//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//           >
//             Create User
//           </button>
//           <button
//             type="button"
//             onClick={() => navigate("/users")}
//             className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500"
//           >
//             Back to List
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

//////////////////////////////////////

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreateNewUsers() {
  const [formData, setFormData] = useState({
    Fname: "",
    Lname: "",
    password: "",
    role: "", // Store role name, not ID
  });

  const [roles, setRoles] = useState(["hr", "admin"]); // Store roles from backend
  const navigate = useNavigate();

  // Fetch roles from backend
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/roles") // Replace with actual API endpoint
  //     .then((response) => {
  //       setRoles(response.data);
  //     })
  //     .catch((error) => console.error("Error fetching roles:", error));
  // }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/users", formData);
      alert("User created successfully!");
      navigate("portal/users"); // Redirect back to users list
    } catch (error) {
      console.error("Error creating user:", error);
      //alert("Failed to create user. Please try again.");
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4">Create New User</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* First Name */}
        <div>
          <label className="block text-gray-700">First Name</label>
          <input
            type="text"
            name="Fname"
            value={formData.Fname}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-gray-700">Last Name</label>
          <input
            type="text"
            name="Lname"
            value={formData.Lname}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Role Dropdown */}
        <div>
          <label className="block text-gray-700">Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          >
            <option value="" disabled>
              Select a role
            </option>
            {roles.map((role, index) => (
              <option key={index} value={role.name}>
                {role}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <div className="flex gap-4">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Create User
          </button>
          <button
            type="button"
            onClick={() => navigate("portal/users")}
            className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500"
          >
            Back to List
          </button>
        </div>
      </form>
    </div>
  );
}
