import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function EditDepartment() {
  const { id } = useParams(); // Get department ID from URL
  const [formData, setFormData] = useState({ name: "", abbreviation: "" });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null); // ✅ State for success/error messages
  const [messageType, setMessageType] = useState("success"); // "success" or "error"
  const [formVisible, setFormVisible] = useState(true);
  const navigate = useNavigate();

  // Fetch department details when component loads
  useEffect(() => {
    axios
      .patch(`http://localhost:3000/departments/${id}`)
      .then((response) => {
        setFormData(response.data);
        setLoading(false);
      })
      .catch(() => {
        setMessage("Error fetching department details.");
        setMessageType("error");
        setLoading(false);
      });
  }, [id]);

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `http://localhost:3000/departments/${id}`,
        formData
      );
      if (response.status === 200) {
        setMessage("Department updsted successfully!");
        setMessageType("success");
        setFormVisible(true); // Hide the form

        // Clear message after 3 seconds
        setTimeout(() => {
          setFormVisible(true);
          setMessage(null);
          navigate("portal/departments");
        }, 3000);
      }
    } catch (error) {
      setMessage(
        `Error updating department ${error?.message}. Please try again.`
      );
      setMessageType("error");
    }
  };

  if (loading) return <p className="text-gray-600">Loading department...</p>;

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4">Edit Department</h1>

      {/* ✅ Success/Error Message */}
      {message && (
        <div
          className={`p-3 mb-4 rounded-lg ${
            messageType === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {message}
        </div>
      )}

      {/* Show form only if formVisible is true */}
      {formVisible && (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Department Name */}
          <div>
            <label className="block text-gray-700 font-semibold">
              Department Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Abbreviation */}
          <div>
            <label className="block text-gray-700 font-semibold">
              Abbreviation
            </label>
            <input
              type="text"
              name="abbreviation"
              value={formData.abbreviation}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => navigate("portal/departments")}
              className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
