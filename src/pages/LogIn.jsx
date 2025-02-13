import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Replace with actual API endpoint
      const response = await axios.post(
        "http://localhost:3000/users/login",
        credentials
      );
      console.log(response);

      // save it to localstorage
      // redirect to dashboard via router

      localStorage.setItem("role", response.data.role);
      localStorage.setItem("name", response.data.name);
      localStorage.setItem("token", response.data.token);
      // redirect("/portal");
      navigate("/portal");
      // Handle login success
      // alert("Login Successful!"); // Replace with actual redirection logic
      // Example: localStorage.setItem("token", response.data.token);
      // window.location.href = "/dashboard";
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

        <form onSubmit={handleLogin} className="mt-6">
          {/* Email Field */}
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
              className="w-full mt-2 p-2 border rounded"
            />
          </div>

          {/* Password Field */}
          <div className="mt-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
              className="w-full mt-2 p-2 border rounded"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right mt-2">
            <a href="#" className="text-blue-500 hover:underline text-sm">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center text-sm mt-4">
          Don&apos;t have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
