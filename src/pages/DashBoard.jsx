////////////////////////////////////////////

import { useEffect, useState } from "react";
import axios from "axios";

export default function DashBoard() {
  const [stats, setStats] = useState({
    jobs: 0,
    applicants: 0,
    locations: 0,
    departments: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [jobsRes, applicantsRes, locationsRes, departmentsRes] =
          await Promise.all([
            axios.get("http://localhost:3000/jobs"),
            axios.get("http://localhost:3000/applicantforms"),
            axios.get("http://localhost:3000/location"),
            axios.get("http://localhost:3000/departments"),
          ]);

        setStats({
          jobs: jobsRes.data.length,
          applicants: applicantsRes.data.length,
          locations: locationsRes.data.length,
          departments: departmentsRes.data.length,
        });
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Jobs */}
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <h2 className="text-xl font-semibold">Jobs</h2>
          <p className="text-2xl font-bold">{stats.jobs}</p>
        </div>

        {/* Applicants */}
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <h2 className="text-xl font-semibold">Applicants</h2>
          <p className="text-2xl font-bold">{stats.applicants}</p>
        </div>

        {/* Locations */}
        <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <h2 className="text-xl font-semibold">Locations</h2>
          <p className="text-2xl font-bold">{stats.locations}</p>
        </div>

        {/* Departments */}
        <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <h2 className="text-xl font-semibold">Departments</h2>
          <p className="text-2xl font-bold">{stats.departments}</p>
        </div>
      </div>
    </div>
  );
}

//////////////////////////////////////////

// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function DashBoard() {
//   const [stats, setStats] = useState({
//     jobs: 0,
//     applicants: 0,
//     locations: 0,
//     departments: 0,
//   });

//   // Fetch Jobs Count
//   const fetchJobsCount = async () => {
//     try {
//       const response = await axios.get("http://localhost:3000/jobs/count"); // Replace with actual API
//       setStats((prev) => ({ ...prev, jobs: response.data.count }));
//     } catch (error) {
//       console.error("Error fetching jobs count:", error);
//     }
//   };

//   // Fetch Applicants Count
//   const fetchApplicantsCount = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:3000/applicants/count"
//       );
//       setStats((prev) => ({ ...prev, applicants: response.data.count }));
//     } catch (error) {
//       console.error("Error fetching applicants count:", error);
//     }
//   };

//   // Fetch Locations Count
//   const fetchLocationsCount = async () => {
//     try {
//       const response = await axios.get("http://localhost:3000/locations/count");
//       setStats((prev) => ({ ...prev, locations: response.data.count }));
//     } catch (error) {
//       console.error("Error fetching locations count:", error);
//     }
//   };

//   // Fetch Departments Count
//   const fetchDepartmentsCount = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:3000/departments/count"
//       );
//       setStats((prev) => ({ ...prev, departments: response.data.count }));
//     } catch (error) {
//       console.error("Error fetching departments count:", error);
//     }
//   };

//   // Fetch all data on mount and refresh every 10 seconds
//   useEffect(() => {
//     fetchJobsCount();
//     fetchApplicantsCount();
//     fetchLocationsCount();
//     fetchDepartmentsCount();

//     const interval = setInterval(() => {
//       fetchJobsCount();
//       fetchApplicantsCount();
//       fetchLocationsCount();
//       fetchDepartmentsCount();
//     }, 10000); // Refresh every 10 seconds

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   return (
//     <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//       {/* Jobs */}
//       <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md text-center">
//         <h2 className="text-xl font-bold">Jobs</h2>
//         <p className="text-3xl font-semibold">{stats.jobs}</p>
//       </div>

//       {/* Applicants */}
//       <div className="bg-green-500 text-white p-6 rounded-lg shadow-md text-center">
//         <h2 className="text-xl font-bold">Applicants</h2>
//         <p className="text-3xl font-semibold">{stats.applicants}</p>
//       </div>

//       {/* Locations */}
//       <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-md text-center">
//         <h2 className="text-xl font-bold">Locations</h2>
//         <p className="text-3xl font-semibold">{stats.locations}</p>
//       </div>

//       {/* Departments */}
//       <div className="bg-red-500 text-white p-6 rounded-lg shadow-md text-center">
//         <h2 className="text-xl font-bold">Departments</h2>
//         <p className="text-3xl font-semibold">{stats.departments}</p>
//       </div>
//     </div>
//   );
// }
