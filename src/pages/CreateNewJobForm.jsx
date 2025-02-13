import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function CreateJob() {
  const [job, setJob] = useState({
    title: "",
    description: "",
    departmentId: "",
    startDate: "",
    endDate: "",
    status: "",
    quantity: 0,
    responsibility: "",
    requirement: "",
    skill: "",

    locationId: "",
  });

  const [message, setMessage] = useState("");
  const [departments, setDepartments] = useState([]);

  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON server
    axios
      .get("http://localhost:3000/departments")
      .then((response) => setDepartments(response.data))
      .catch((error) => console.error("Error fetching data:", error));
    //
    axios
      .get("http://localhost:3000/location")
      .then((response) => setLocations(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectedChange = (name, value) => {
    console.log("name->", name, "value->", value);

    setJob((prev) => ({
      ...prev,
      [name]: value,
    }));

    console.log("job", job);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newJob = {
        ...job,
        startDate: new Date(job.startDate),
        endDate: new Date(job.endDate),
      };

      const response = await axios.post("http://localhost:3000/jobs", newJob);
      setMessage("Job created successfully!");
      setJob({
        title: "",
        description: "",
        departmentId: "",
        startDate: "",
        endDate: "",
        status: "",
        quantity: 0,
        responsibility: "",
        requirement: "",
        skill: "",
        locationId: "",
      });

      console.log(response);
    } catch (error) {
      setMessage("Error creating job. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Link
        to="portal/Jobs"
        className="text-blue-500 hover:underline text-lg font-medium"
      >
        ← Back To Job List
      </Link>
      <div className="max-w-2xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Create a New Job</h2>
        {message && <p className="mb-4 text-green-600">{message}</p>}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white p-4 rounded shadow-md"
        >
          <div>
            <label className="block font-semibold">Job Title:</label>
            <input
              type="text"
              name="title"
              value={job.title}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block font-semibold">Description:</label>
            <textarea
              name="description"
              value={job.description}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block font-semibold">Department :</label>
            <select
              name="departments"
              id="department"
              className="w-full p-2 border rounded"
              onChange={(e) =>
                handleSelectedChange("departmentId", e.target.value)
              }
            >
              <option disabled value="">
                Choose department
              </option>
              {departments.map((department) => (
                <option key={department.id} value={department.id}>
                  {department.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-semibold">Start Date:</label>
            <input
              type="date"
              name="startDate"
              value={job.startDate}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block font-semibold">End Date:</label>
            <input
              type="date"
              name="endDate"
              value={job.endDate}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block font-semibold">Status:</label>
            <select
              name="status"
              value={job.status}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            >
              <option disabled>Select Status</option>
              <option value="Open">Open</option>
              <option value="Closed">Closed</option>
              <option value="On Hold">On Hold</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold">Quantity:</label>
            <input
              type="number"
              name="quantity"
              value={job.quantity}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block font-semibold">Responsibility:</label>
            <textarea
              name="responsibility"
              value={job.responsibility}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block font-semibold">Requirement:</label>
            <textarea
              name="requirement"
              value={job.requirement}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block font-semibold">Skill:</label>
            <textarea
              name="skill"
              value={job.skill}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block font-semibold">Location :</label>
            <select
              name="locationId"
              id="locationId"
              className="w-full p-2 border rounded"
              onChange={(e) =>
                handleSelectedChange("locationId", e.target.value)
              }
            >
              <option disabled value="">
                Choose location
              </option>
              {locations.map((location) => (
                <option key={location.id} value={location.id}>
                  {location.address}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Create Job
          </button>
        </form>
      </div>
    </div>
  );
}
