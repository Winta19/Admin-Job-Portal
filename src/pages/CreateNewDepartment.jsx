// import { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// export default function CreateNewDepartment() {
//   const [name, setName] = useState("");
//   const [abbreviation, setAbbreviation] = useState("");
//   const [message, setMessage] = useState(null);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!name || !abbreviation) {
//       setError("Both fields are required.");
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:3000/departments", {
//         name,
//         abbreviation,
//       });

//       if (response.status === 201) {
//         setMessage("Department created successfully!");
//         setError(null);
//         setName("");
//         setAbbreviation("");
//       }
//     } catch (error) {
//       setError("Failed to create department. Please try again.");
//       setMessage(null);
//     }
//   };

//   return (
//     <div>
//       <Link
//         to="/Departments"
//         className="text-blue-500 hover:underline text-lg font-medium"
//       >
//         ← Back To Departments List
//       </Link>

//       <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
//         <h1 className="text-2xl font-bold mb-4">Create New Department</h1>

//         {message && <p className="text-green-500">{message}</p>}
//         {error && <p className="text-red-500">{error}</p>}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-gray-700">Department Name</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//               placeholder="Enter department name"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700">Abbreviation</label>
//             <input
//               type="text"
//               value={abbreviation}
//               onChange={(e) => setAbbreviation(e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//               placeholder="Enter abbreviation"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
//           >
//             Create Department
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

////////////////////////////////
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function CreateNewDepartment() {
  const [name, setName] = useState("");
  const [abbreviation, setAbbreviation] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [formVisible, setFormVisible] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !abbreviation) {
      setError("Both fields are required.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/departments", {
        name,
        abbreviation,
      });

      if (response.status === 201) {
        setMessage("Department created successfully!");
        setError(null);
        setName("");
        setAbbreviation("");
        setFormVisible(false); // Hide the form

        // Show the form again after 3 seconds
        setTimeout(() => {
          setFormVisible(true);
          setMessage(null); // Clear success message
        }, 3000);
      }
    } catch (error) {
      setError("Failed to create department. Please try again.");
      setMessage(null);
    }
  };

  return (
    <div>
      <Link
        to="portal/Departments"
        className="text-blue-500 hover:underline text-lg font-medium"
      >
        ← Back To Departments List
      </Link>

      <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-4">Create New Department</h1>

        {message && <p className="text-green-500 text-center">{message}</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* Show form only if formVisible is true */}
        {formVisible && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Department Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter department name"
              />
            </div>

            <div>
              <label className="block text-gray-700">Abbreviation</label>
              <input
                type="text"
                value={abbreviation}
                onChange={(e) => setAbbreviation(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter abbreviation"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Create Department
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
