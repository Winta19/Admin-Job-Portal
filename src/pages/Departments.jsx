// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// export default function Departments() {
//   const [departments, setDepartments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/departments") // Update with your API URL
//       .then((response) => {
//         setDepartments(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError("Error fetching departments. Please try again.");
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p className="text-gray-600">Loading departments...</p>;
//   if (error) return <p className="text-red-500">{error}</p>;

//   return (
//     <div className="p-4">
//       <div className="flex justify-between">
//         <div>
//           <h1 className="text-2xl font-bold mb-4">List of Departments</h1>
//         </div>
//         <div>
//           <Link
//             to={`/CreateNewDepartment`}
//             className="flex bg-primary_ie px-4 py-2"
//           >
//             <span>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="size-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M12 4.5v15m7.5-7.5h-15"
//                 />
//               </svg>
//             </span>
//             <span> New Department</span>
//           </Link>
//         </div>
//       </div>
//       <table className="table-auto w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border border-gray-300 px-4 py-2">
//               Department Name
//             </th>
//             <th className="border border-gray-300 px-4 py-2">Abbreviation</th>
//             <th className="border border-gray-300 px-4 py-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {departments.map((dept) => (
//             <tr key={dept.id} className="odd:bg-white even:bg-gray-100">
//               <td className="border border-gray-300 px-4 py-2">{dept.name}</td>
//               <td className="border border-gray-300 px-4 py-2">
//                 {dept.abbreviation}
//               </td>
//               <td className="border border-gray-300 px-4 py-2 flex space-x-12">
//                 <Link to={`/to`} className="flex bg-primary_ie px-4 py-2">
//                   {" "}
//                   Edit
//                 </Link>
//                 <Link to={`/to`} className="flex bg-primary_ie px-4 py-2">
//                   Delete
//                 </Link>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

///////////////////////////////////////////////

// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Departments() {
//   const [departments, setDepartments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/departments") // Update with your API URL
//       .then((response) => {
//         setDepartments(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError("Error fetching departments. Please try again.");
//         setLoading(false);
//       });
//   }, []);
//   console.log(navigate);

//   // Handle Delete with confirmation
//   const handleDelete = async (id) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this department?"
//     );
//     if (confirmDelete) {
//       try {
//         await axios.delete(`http://localhost:3000/departments/${id}`);
//         alert("Department deleted successfully!");
//         setDepartments(departments.filter((dept) => dept.id !== id));
//       } catch (error) {
//         alert("Error deleting department. Please try again.");
//       }
//     }
//   };

//   if (loading) return <p className="text-gray-600">Loading departments...</p>;
//   if (error) return <p className="text-red-500">{error}</p>;

//   return (
//     <div className="p-4">
//       <div className="flex justify-between">
//         <h1 className="text-2xl font-bold mb-4">List of Departments</h1>
//         <Link
//           to="/CreateNewDepartment"
//           className="flex bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//         >
//           <span className="mr-2">+</span>
//           <span> New Department</span>
//         </Link>
//       </div>
//       <table className="table-auto w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border border-gray-300 px-4 py-2">
//               Department Name
//             </th>
//             <th className="border border-gray-300 px-4 py-2">Abbreviation</th>
//             <th className="border border-gray-300 px-4 py-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {departments.map((dept) => (
//             <tr key={dept.id} className="odd:bg-white even:bg-gray-100">
//               <td className="border border-gray-300 px-4 py-2">{dept.name}</td>
//               <td className="border border-gray-300 px-4 py-2">
//                 {dept.abbreviation}
//               </td>
//               <td className="border border-gray-300 px-4 py-2 flex space-x-4">
//                 <Link
//                   to={`/EditDepartment/${dept.id}`}
//                   className="text-blue-500 hover:underline"
//                 >
//                   Edit
//                 </Link>
//                 <button
//                   onClick={() => handleDelete(dept.id)}
//                   className="text-red-500 hover:underline"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

///////////////////////////////////////////////

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Departments() {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const response = await axios.get("http://localhost:3000/departments");
      setDepartments(response.data);
      setLoading(false);
    } catch (error) {
      setError("Error fetching departments. Please try again.");
      setLoading(false);
    }
  };

  // Delete department function
  const handleDelete = async (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this department?"
    );

    if (isConfirmed) {
      try {
        await axios.delete(`http://localhost:3000/departments/${id}`);
        alert("Department deleted successfully!");
        fetchDepartments(); // Refresh the list after deletion
      } catch (error) {
        console.error("Error deleting department:", error);
        alert("Failed to delete department.");
      }
    }
  };

  if (loading) return <p className="text-gray-600">Loading departments...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-4">List of Departments</h1>
        <Link
          to="/portal/CreateNewDepartment"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          + New Department
        </Link>
      </div>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">
              Department Name
            </th>
            <th className="border border-gray-300 px-4 py-2">Abbreviation</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((dept) => (
            <tr key={dept.id} className="odd:bg-white even:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{dept.name}</td>
              <td className="border border-gray-300 px-4 py-2">
                {dept.abbreviation}
              </td>
              <td className="border border-gray-300 px-4 py-2 flex space-x-2">
                {/* Edit Button */}
                <Link
                  to={`portal/EditDepartment/${dept.id}`}
                  className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600"
                >
                  Edit
                </Link>

                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(dept.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
