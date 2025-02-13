///////////////////////////////////////
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  console.log(selectedJob);

  useEffect(() => {
    // Fetch data from the JSON server
    axios
      .get("http://localhost:3000/jobs")
      .then((response) => setJobs(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleStatusChange = (job) => {
    setSelectedJob(job);
  };
  console.log(handleStatusChange);

  // Function to format the date
  const formatDate = (dateString) => {
    if (!dateString) return "N/A"; // Handle missing dates
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <div>
          {" "}
          <h1 className="text-2xl font-bold mb-4">Jobs</h1>
        </div>
        <div>
          <Link
            to={`portal/CreateNewJobForm`}
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
            <span> New Job</span>
          </Link>
        </div>
      </div>

      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Job Title</th>
            <th className="border border-gray-300 px-4 py-2">Department</th>
            <th className="border border-gray-300 px-4 py-2">Location</th>
            <th className="border border-gray-300 px-4 py-2">Address</th>
            <th className="border border-gray-300 px-4 py-2">Start Date</th>
            <th className="border border-gray-300 px-4 py-2">End Date</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id} className="odd:bg-white even:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{job.title}</td>
              <td className="border border-gray-300 px-4 py-2">
                {job.department?.name || "N/A"}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {job.location?.name || "N/A"}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {job.location?.address || "N/A"}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {formatDate(job.startDate)}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {formatDate(job.endDate)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
