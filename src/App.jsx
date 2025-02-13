import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
// import { Navigate } from "react-router-dom";

import LogIn from "./pages/LogIn";
import EditDepartment from "./pages/EditDepartment";
import CreateNewUsers from "./pages/CreateNewUsers";
import CreateNewLocation from "./pages/CreateNewLocation";
import CreateNewDepartment from "./pages/CreateNewDepartment";
import Departments from "./pages/Departments";
import Locations from "./pages/Locations";
import CreateNewJobForm from "./pages/CreateNewJobForm";
import Jobs from "./pages/Jobs";
import DashBoard from "./pages/DashBoard";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
// import TeamLeaderView from "./components/TeamLeaderView";
// import HRView from "./components/HRView";
// import ProtectedRoute from "./components/ProtectedRoute";
//import Login from "./pages/LogIn";
//import Home from "./pages/Home";
import Layout from "./components/Layout";
import Applicants from "./components/Applicants";
import { SidebarProvider } from "./SidebarContext";

function App() {
  // const role = sessionStorage.getItem("role");

  return (
    // <Routes><Route> </Route></Routes>
    <SidebarProvider>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="portal" element={<Layout />}>
          <Route index element={<DashBoard />} />
          <Route path="DashBoard" element={<DashBoard />} />

          <Route path="Users" element={<Users />} />
          <Route path="Settings" element={<Settings />} />
          <Route path="Applicants" element={<Applicants />} />
          <Route path="Jobs" element={<Jobs />} />
          <Route path="CreateNewJobForm" element={<CreateNewJobForm />} />
          <Route path="Departments" element={<Departments />} />
          <Route path="Locations" element={<Locations />} />
          <Route path="EditDepartment/:id" element={<EditDepartment />} />
          <Route path="CreateNewDepartment" element={<CreateNewDepartment />} />
          <Route path="CreateNewLocation" element={<CreateNewLocation />} />
          <Route path="CreateNewUser" element={<CreateNewUsers />} />
        </Route>

        {/* Protected Routes */}
        {/* <Route
            path="/team-leader"
            element={
              <ProtectedRoute>
                {role === "Team Leader" ? (
                  <TeamLeaderView />
                ) : (
                  <Navigate to="/" />
                )}
              </ProtectedRoute>
            }
          />
          <Route
            path="/hr"
            element={
              <ProtectedRoute>
                {role === "HR" ? <HRView /> : <Navigate to="/home" />}
              </ProtectedRoute>
            }
          /> */}
      </Routes>
    </SidebarProvider>
  );
}

export default App;
