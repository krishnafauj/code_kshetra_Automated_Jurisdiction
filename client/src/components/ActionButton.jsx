import React from "react";
import { useNavigate } from "react-router-dom";

export default function ActionButton({ icon: Icon, text, to }) {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <button
      onClick={() => navigate(to)} // Redirect on click
      className="flex items-center gap-2 bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all text-white hover:text-blue-600 font-medium"
    >
      <Icon className="w-5 h-5" />
      {text}
    </button>
  );
}
