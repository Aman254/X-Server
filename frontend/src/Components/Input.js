import React from "react";

export default function Input({ type, placeholder }) {
  // Destructure the props
  return (
    <div>
      <input
        type={type}
        className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-300 hover:shadow-md hover:border-gray-300"
        placeholder={placeholder}
      />
    </div>
  );
}
