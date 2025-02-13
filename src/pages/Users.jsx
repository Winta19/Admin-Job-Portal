import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users") // Replace with your actual backend endpoint
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="p-4">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">List of Users</h1>
        <Link
          to="portal/CreateNewUser"
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <span>New User</span>
        </Link>
      </div>

      {/* Users Table */}
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">First Name</th>
            <th className="border border-gray-300 px-4 py-2">Last Name</th>

            <th className="border border-gray-300 px-4 py-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="odd:bg-white even:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{user.Fname}</td>
              <td className="border border-gray-300 px-4 py-2">{user.Lname}</td>

              {/* Hide password */}
              <td className="border border-gray-300 px-4 py-2">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

///////////////////////////////////

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// export default function Users() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/users") // Replace with your actual backend endpoint
//       .then((response) => setUsers(response.data))
//       .catch((error) => console.error("Error fetching users:", error));
//   }, []);

//   const handleRoleChange = async (userId, newRole) => {
//     try {
//       await axios.put(`http://localhost:3000/users/${userId}`, {
//         roleId: newRole,
//       });

//       // Update the user role in the frontend after successful API call
//       setUsers((prevUsers) =>
//         prevUsers.map((user) =>
//           user.id === userId ? { ...user, roleId: newRole } : user
//         )
//       );
//     } catch (error) {
//       console.error("Error updating user role:", error);
//     }
//   };

//   return (
//     <div className="p-4">
//       {/* Header Section */}
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-2xl font-bold">List of Users</h1>
//         <Link
//           to="/CreateNewUsers"
//           className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-5 h-5 mr-2"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M12 4.5v15m7.5-7.5h-15"
//             />
//           </svg>
//           <span>New User</span>
//         </Link>
//       </div>

//       {/* Users Table */}
//       <table className="table-auto w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border border-gray-300 px-4 py-2">First Name</th>
//             <th className="border border-gray-300 px-4 py-2">Last Name</th>
//             <th className="border border-gray-300 px-4 py-2">Role</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id} className="odd:bg-white even:bg-gray-100">
//               <td className="border border-gray-300 px-4 py-2">{user.Fname}</td>
//               <td className="border border-gray-300 px-4 py-2">{user.Lname}</td>

//               {/* Role Select Dropdown */}
//               <td className="border border-gray-300 px-4 py-2">
//                 <select
//                   value={user.roleId}
//                   onChange={(e) => handleRoleChange(user.id, e.target.value)}
//                   className="w-full p-2 border rounded"
//                 >
//                   <option value="teamlead">Team Lead</option>
//                   <option value="manager">Manager</option>
//                   <option value="hr">HR</option>
//                 </select>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
