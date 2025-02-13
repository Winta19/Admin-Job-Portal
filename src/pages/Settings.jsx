// import MyHeader from "../components/MyHeader";

// function Settings() {
//   return (
//     <>
//       <div>Setting</div>
//     </>
//   );
// }

// export default Settings;

////////////////////////////////////////

// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function Settings() {
//   const [user, setUser] = useState({
//     fname: "",
//     lname: "",
//     email: "",
//     currentPassword: "",
//     newPassword: "",
//     confirmPassword: "",
//   });

//   const userId = 1; // Replace with actual logged-in user ID

//   // Fetch user details
//   useEffect(() => {
//     axios
//       .get(`http://localhost:3000/users/${userId}`)
//       .then((response) => {
//         setUser((prev) => ({
//           ...prev,
//           fname: response.data.fname,
//           lname: response.data.lname,
//           email: response.data.email,
//         }));
//       })
//       .catch((error) => console.error("Error fetching user data:", error));
//   }, []);

//   // Handle input change
//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   // Update profile function
//   const handleUpdateProfile = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`http://localhost:3000/users/${userId}`, {
//         fname: user.fname,
//         lname: user.lname,
//         email: user.email,
//       });
//       alert("Profile updated successfully!");
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       alert("Failed to update profile.");
//     }
//   };

//   // Change password function
//   const handleChangePassword = async (e) => {
//     e.preventDefault();
//     if (user.newPassword !== user.confirmPassword) {
//       alert("New passwords do not match!");
//       return;
//     }
//     try {
//       await axios.put(`http://localhost:3000/users/${userId}/change-password`, {
//         currentPassword: user.currentPassword,
//         newPassword: user.newPassword,
//       });
//       alert("Password changed successfully!");
//       setUser({
//         ...user,
//         currentPassword: "",
//         newPassword: "",
//         confirmPassword: "",
//       });
//     } catch (error) {
//       console.error("Error changing password:", error);
//       alert("Failed to change password.");
//     }
//   };

//   return (
//     <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md">
//       <h1 className="text-2xl font-bold mb-4">Settings</h1>

//       {/* Edit Profile Form */}
//       <div className="flex gag-6">
//         <div className="w-1/2 bg-gray-100 p-6 rounded-lg">
//           <h2 className="text-xl font-semibold">Edit Profile</h2>
//           <form onSubmit={handleUpdateProfile} className="space-y-4">
//             <div>
//               <label className="block text-gray-700">First Name</label>
//               <input
//                 type="text"
//                 name="fname"
//                 value={user.fname}
//                 onChange={handleChange}
//                 required
//                 className="w-full border p-2 rounded"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700">Last Name</label>
//               <input
//                 type="text"
//                 name="lname"
//                 value={user.lname}
//                 onChange={handleChange}
//                 required
//                 className="w-full border p-2 rounded"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={user.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full border p-2 rounded"
//               />
//             </div>

//             <button
//               type="submit"
//               className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//             >
//               Update Profile
//             </button>
//           </form>
//         </div>
//         {/* Change Password Form */}
//         <div className="w-1/2 bg-gray-100 p-6 rounded-lg">
//           <form onSubmit={handleChangePassword} className="space-y-4 mt-6">
//             <h2 className="text-xl font-semibold">Change Password</h2>

//             <div>
//               <label className="block text-gray-700">Current Password</label>
//               <input
//                 type="password"
//                 name="currentPassword"
//                 value={user.currentPassword}
//                 onChange={handleChange}
//                 required
//                 className="w-full border p-2 rounded"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700">New Password</label>
//               <input
//                 type="password"
//                 name="newPassword"
//                 value={user.newPassword}
//                 onChange={handleChange}
//                 required
//                 className="w-full border p-2 rounded"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700">
//                 Confirm New Password
//               </label>
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 value={user.confirmPassword}
//                 onChange={handleChange}
//                 required
//                 className="w-full border p-2 rounded"
//               />
//             </div>

//             <button
//               type="submit"
//               className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
//             >
//               Change Password
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

///////////////////////////////////////

// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function Settings() {
//   const [user, setUser] = useState({
//     fname: "",
//     lname: "",
//     email: "",
//     currentPassword: "",
//     newPassword: "",
//     confirmPassword: "",
//   });

//   const userId = 1; // Replace with actual logged-in user ID

//   // Fetch user details
//   useEffect(() => {
//     axios
//       .get(`http://localhost:3000/users/${userId}`)
//       .then((response) => {
//         setUser((prev) => ({
//           ...prev,
//           fname: response.data.fname,
//           lname: response.data.lname,
//           email: response.data.email,
//         }));
//       })
//       .catch((error) => console.error("Error fetching user data:", error));
//   }, []);

//   // Handle input change
//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   // Update profile function
//   const handleUpdateProfile = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`http://localhost:3000/users/${userId}`, {
//         fname: user.fname,
//         lname: user.lname,
//         email: user.email,
//       });
//       alert("Profile updated successfully!");
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       alert("Failed to update profile.");
//     }
//   };

//   // Change password function
//   const handleChangePassword = async (e) => {
//     e.preventDefault();
//     if (user.newPassword !== user.confirmPassword) {
//       alert("New passwords do not match!");
//       return;
//     }
//     try {
//       await axios.put(`http://localhost:3000/users/${userId}/change-password`, {
//         currentPassword: user.currentPassword,
//         newPassword: user.newPassword,
//       });
//       alert("Password changed successfully!");
//       setUser({
//         ...user,
//         currentPassword: "",
//         newPassword: "",
//         confirmPassword: "",
//       });
//     } catch (error) {
//       console.error("Error changing password:", error);
//       alert("Failed to change password.");
//     }
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md">
//       <h1 className="text-2xl font-bold mb-4 text-center">Settings</h1>

//       {/* Side-by-Side Layout */}
//       <div className="flex gap-6">
//         {/* Edit Profile Form */}
//         <div className="w-1/2 bg-gray-100 p-6 rounded-lg">
//           <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
//           <form onSubmit={handleUpdateProfile} className="space-y-4">
//             <div>
//               <label className="block text-gray-700">First Name</label>
//               <input
//                 type="text"
//                 name="fname"
//                 value={user.fname}
//                 onChange={handleChange}
//                 required
//                 className="w-full border p-2 rounded"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700">Last Name</label>
//               <input
//                 type="text"
//                 name="lname"
//                 value={user.lname}
//                 onChange={handleChange}
//                 required
//                 className="w-full border p-2 rounded"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={user.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full border p-2 rounded"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//             >
//               Update Profile
//             </button>
//           </form>
//         </div>

//         {/* Change Password Form */}
//         <div className="w-1/2 bg-gray-100 p-6 rounded-lg">
//           <h2 className="text-xl font-semibold mb-4">Change Password</h2>
//           <form onSubmit={handleChangePassword} className="space-y-4">
//             <div>
//               <label className="block text-gray-700">Current Password</label>
//               <input
//                 type="password"
//                 name="currentPassword"
//                 value={user.currentPassword}
//                 onChange={handleChange}
//                 required
//                 className="w-full border p-2 rounded"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700">New Password</label>
//               <input
//                 type="password"
//                 name="newPassword"
//                 value={user.newPassword}
//                 onChange={handleChange}
//                 required
//                 className="w-full border p-2 rounded"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700">
//                 Confirm New Password
//               </label>
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 value={user.confirmPassword}
//                 onChange={handleChange}
//                 required
//                 className="w-full border p-2 rounded"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
//             >
//               Change Password
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

//////////////////////////////////////////////////////

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Settings() {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const userId = 1; // Replace with actual logged-in user ID

  // Fetch user details
  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${userId}`)
      .then((response) => {
        setUser((prev) => ({
          ...prev,
          fname: response.data.fname,
          lname: response.data.lname,
          email: response.data.email,
        }));
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/users/${userId}`, {
        fname: user.fname,
        lname: user.lname,
        email: user.email,
      });
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (user.newPassword !== user.confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    try {
      await axios.put(`http://localhost:3000/users/${userId}/change-password`, {
        currentPassword: user.currentPassword,
        newPassword: user.newPassword,
      });
      alert("Password changed successfully!");
      setUser({
        ...user,
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error("Error changing password:", error);
      alert("Failed to change password.");
    }
  };

  // Handle Logout
  const handleLogout = () => {
    alert("Logging out..."); // Replace with actual logout logic
    // Example: localStorage.removeItem("token"); window.location.href = "/login";
  };

  return (
    <div className="relative p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md">
      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="absolute top-6 right-6 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
      >
        <Link to="/">Logout</Link>
      </button>

      {/* Title */}
      <h1 className="text-2xl font-bold mb-4 text-center">Settings</h1>

      {/* Side-by-Side Layout */}
      <div className="flex gap-6">
        {/* Edit Profile Form */}
        <div className="w-1/2 bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
          <form onSubmit={handleUpdateProfile} className="space-y-4">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                name="fname"
                value={user.fname}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                name="lname"
                value={user.lname}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Update Profile
            </button>
          </form>
        </div>

        {/* Change Password Form */}
        <div className="w-1/2 bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Change Password</h2>
          <form onSubmit={handleChangePassword} className="space-y-4">
            <div>
              <label className="block text-gray-700">Current Password</label>
              <input
                type="password"
                name="currentPassword"
                value={user.currentPassword}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label className="block text-gray-700">New Password</label>
              <input
                type="password"
                name="newPassword"
                value={user.newPassword}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label className="block text-gray-700">
                Confirm New Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
