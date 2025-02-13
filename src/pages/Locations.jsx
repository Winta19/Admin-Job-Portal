import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Locations() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/location") // Update with your API URL
      .then((response) => {
        setLocations(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching locations. Please try again.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-gray-600">Loading locations...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-4">List of Locations</h1>
        </div>
        <div>
          <Link
            to={`portal/CreateNewLocation`}
            className="flex bg-primary_ie px-4 py-2"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </span>
            <span> New Location</span>
          </Link>
        </div>
      </div>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Location Name</th>
            <th className="border border-gray-300 px-4 py-2">Address</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((location) => (
            <tr key={location.id} className="odd:bg-white even:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">
                {location.name}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {location.address}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
