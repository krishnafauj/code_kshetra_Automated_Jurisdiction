import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function LoginPage() {
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

    try {
      const endpoint = isSignup ? "/signup" : "/login";
      console.log(formData);
      const { data } = await axios.post(endpoint, {
        email: formData.email,
        password: formData.password,
      });
      alert(data.message); // Handle success response
    } 
    catch (err) {
      setError(err.response?.data?.message || "An error occurred. Please try again.");
    }
    
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-96 bg-white shadow-lg rounded-lg p-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">{isSignup ? "Sign Up" : "Login"}</h2>
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
  );
}