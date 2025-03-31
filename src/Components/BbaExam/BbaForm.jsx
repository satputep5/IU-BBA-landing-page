import React, { useState } from "react";

function FormComponent() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        state: "",
        city: "",
        school: "",
        course: "",
        nationality: "",
        agree: true, // Set to true to make it checked by default
      });
      

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="flex justify-center py-4 items-center h-auto bg-transparent px-2 w-full md:w-1/2">
      <div className="w-full max-w-sm md:max-w-md lg:max-w-lg bg-white shadow-md border border-gray-300 rounded-xl overflow-hidden">
        {/* Admission Form Header */}
        <div className="bg-[#135783] text-white text-center text-xl md:text-2xl font-semibold px-4 py-3 rounded-t-xl">
          Admission Open
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 p-3 md:p-5">
          {[
            { name: "name", placeholder: "Name" },
            { name: "email", placeholder: "Email" },
            { name: "mobile", placeholder: "Mobile" },
            { name: "state", placeholder: "State" },
            { name: "city", placeholder: "City" },
            { name: "school", placeholder: "School" },
            { name: "nationality", placeholder: "Nationality" },
          ].map(({ name, placeholder }, index) => (
            <input
              key={index}
              type="text"
              name={name}
              value={formData[name]}
              onChange={handleChange}
              placeholder={placeholder}
              className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#135783]"
              required
            />
          ))}

          {/* Course Dropdown */}
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#135783]"
            required
          >
            <option value="">Select Course</option>
            {["BBA Marketing", "BBA Finance"].map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </select>

          {/* Checkbox */}
          <div className="flex items-center space-x-2 text-sm md:text-base">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              required
              className="h-4 w-4 text-[#135783] focus:ring-[#135783]"
            />
            <span className="text-gray-700">
              I agree to receive information from Indira University *
            </span>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col space-y-2 mt-2">
            <button
              type="submit"
              className="bg-[#135783] text-white px-4 py-2 rounded-md text-sm md:text-base transition-transform duration-300 hover:scale-102 hover:bg-blue-500 hover:bg-opacity-90"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="bg-[#135783] p-3 text-center text-xs md:text-sm text-white rounded-b-xl">
          © 2025 Indira University
        </div>
      </div>
    </div>
  );
}

export default FormComponent;
