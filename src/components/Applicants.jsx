import { useEffect, useState } from "react";
import axios from "axios";

export default function Applicants() {
  const [listofapplicants, setlistofapplicants] = useState([]);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [newStatus, setNewStatus] = useState("");

  useEffect(() => {
    // Fetch data from the JSON server
    axios
      .get("http://localhost:3000/applicantforms")
      .then((response) => setlistofapplicants(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleStatusChange = (applicant) => {
    setSelectedApplicant(applicant);
    setNewStatus(""); // Reset new status
  };

  const confirmStatusChange = () => {
    if (newStatus && selectedApplicant) {
      // Update the status of the applicant
      const updatedApplicant = { ...selectedApplicant, status: newStatus };

      // Send the updated data to the server
      fetch(`http://localhost:3000/listofapplicants/${selectedApplicant.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedApplicant),
      })
        .then((response) => response.json())
        .then(() => {
          // Update the local state
          setlistofapplicants((prev) =>
            prev.map((app) =>
              app.id === selectedApplicant.id ? updatedApplicant : app
            )
          );
          setSelectedApplicant(null); // Close the status change modal
        })
        .catch((error) => console.error("Error updating status:", error));
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">List of Applicants</h1>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">CGPA</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Phone</th>
            <th className="border border-gray-300 px-4 py-2">CV</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Change Status</th>
          </tr>
        </thead>
        <tbody>
          {listofapplicants.map((applicant) => (
            <tr key={applicant.id} className="odd:bg-white even:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">
                {applicant.fullName}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {applicant.cgpa}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {applicant.email}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {applicant.phone}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <a
                  href={applicant.CV}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  View CV
                </a>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {applicant.status}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  onClick={() => handleStatusChange(applicant)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Change Status
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Changing Status */}
      {selectedApplicant && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-lg font-bold mb-4">
              Change Status for {selectedApplicant.Name}
            </h2>
            <select
              value={newStatus}
              onChange={(e) => setNewStatus(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            >
              <option value="" disabled>
                Select New Status
              </option>
              <option value="Interview">Interview</option>
              <option value="Test">Test</option>
              <option value="Pass Exam">Pass Exam</option>
              <option value="Rejected">Rejected</option>
            </select>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setSelectedApplicant(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={confirmStatusChange}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
