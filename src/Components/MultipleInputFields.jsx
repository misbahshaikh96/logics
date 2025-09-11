import React, { useState } from "react";

export default function MultipleInputFields() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="flex flex-col items-center justify-center gap-3 ">
      <h1>
        {formData.name || "Preview"} | {formData.email} | {formData.password} |{" "}
        {formData.message}
      </h1>
      <p>Fill the fields below</p>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your name"
        className="border border-gray-300  rounded-lg w-64 p-2 focus:outline-none focus:ring-2  focus:ring-blue-500 "
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your name"
        className="border border-gray-300  rounded-lg w-64 p-2 focus:outline-none focus:ring-2  focus:ring-blue-500 "
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter your password"
        className="border border-gray-300  rounded-lg w-64 p-2 focus:outline-none focus:ring-2  focus:ring-blue-500 "
      />
      <input
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="write a short message"
        className="border border-gray-300  rounded-lg w-64 p-2 focus:outline-none focus:ring-2  focus:ring-blue-500 h-30"
      />
      {/* live preview section */}
      <div>
        <h2>preview</h2>
        <p>
          <strong>Name:</strong>
          {formData.name}
        </p>
        <p>
          <strong>email:</strong>
          {formData.email}
        </p>
        <p>
          <strong>password:</strong>
          {formData.password}
        </p>
        <p>
          <strong>message:</strong>
          {formData.message}
        </p>
      </div>
    </div>
  );
}
