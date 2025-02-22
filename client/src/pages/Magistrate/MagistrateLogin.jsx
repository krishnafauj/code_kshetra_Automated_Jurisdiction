import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import PoliceImg from "../../assets/policelogin.jpg";
import { Link, useNavigate } from "react-router-dom";
export default function MagistrateLogin() {
  const navigate=useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");

  const toggleForm = () => {
    setIsSignup(!isSignup);
    setError("");
    setFormData({ email: "", password: "", confirmPassword: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (isSignup && formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    const baseUrl = "http://localhost:3001/magistrate"; // Corrected URL format
    const endpoint = isSignup ? "/signup" : "/login";
    const fullUrl = baseUrl + endpoint; // Proper concatenation

    console.log(fullUrl);
    console.log(formData);

    try {
      const { data } = await axios.post(fullUrl, {
        email: formData.email,
        password: formData.password,
        role:"magistrate",
      });
      alert(data.message); // Handle success response
      navigate("/magisterate"); // Navigate to the home page after successful login
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert("Login/Signup failed. Please try again.");

    }
  };

  return (
    <div className="w-screen flex h-screen">
      {/* Left Side - Login Box */}
      <div className="flex justify-left items-center w-1/3 p-10 bg-[#060407]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-96 bg-white shadow-lg rounded-lg p-10 ml-10"
        >
          <h2 className="text-2xl text-black font-bold text-center">{isSignup ? "Sign Up" : "Login"}</h2>
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-gray-800"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-gray-800"
              value={formData.password}
              onChange={handleChange}
            />
            {isSignup && (
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                required
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-gray-800"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            )}
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
            >
              {isSignup ? "Sign Up" : "Login"}
            </button>
          </form>
          <p className="text-center text-sm mt-4 cursor-pointer text-blue-500 hover:text-blue-600" onClick={toggleForm}>
            {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
          </p>
        </motion.div>
      </div>

      {/* Right Side - Image */}
      <div className="w-2/3 h-screen bg-white">
        <img
          className="w-full h-full object-cover"
          src={PoliceImg} 
          alt="Police Login"
        />
      </div>
    </div>
  );
}
