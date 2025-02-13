import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function CreateNewLocation() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [formVisible, setFormVisible] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !address) {
      setError("Both fields are required.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/locations", {
        name,
        address,
      });

      if (response.status === 201) {
        setMessage("Location created successfully!");
        setError(null);
        setName("");
        setAddress("");
        setFormVisible(false); //Hide the form

        // Show the form again after 3 seconds
        setTimeout(() => {
          setFormVisible(true);
          setMessage(null); // clear success message
        }, 3000);
      }
    } catch (err) {
      setError("Failed to create location. Please try again.");
      setMessage(null);
    }
  };

  return (
    <div>
      <Link
        to="portal/Locations"
        className="text-blue-500 hover:underline text-lg font-medium"
      >
        ← Back To Location List
      </Link>
      <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-4">Create New Location</h1>

        {message && <p className="text-green-500">{message}</p>}
        {error && <p className="text-red-500">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Location Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter location name"
            />
          </div>

          <div>
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter address"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Create Location
          </button>
        </form>
      </div>
    </div>
  );
}
