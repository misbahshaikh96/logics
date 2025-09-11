import React, { useState } from "react";

export default function MarksForm() {
  const [marks, setMarks] = useState({
    english: "",
    math: "",
    science: "",
    computer: "",
    urdu: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    const num = Number(value);
    if (value === "" || (num >= 0 && num <= 100)) {
      setMarks((prev) => ({ ...prev, [name]: value }));
    }
  };
  // Reset handler
  const handleReset = () => {
    setMarks({
      english: "",
      math: "",
      science: "",
      computer: "",
      urdu: "",
    });
  };
  const subjects = Object.keys(marks);
  const totalMax = subjects.length * 100;

  const allFilled = subjects.every((s) => marks[s] !== "");
  const obtained = allFilled
    ? subjects.reduce((sum, s) => sum + Number(marks[s]), 0)
    : 0;

  const percentage = allFilled ? (obtained / totalMax) * 100 : 0;
  const grade =
    percentage >= 90
      ? "A+"
      : percentage >= 80
      ? "A"
      : percentage >= 70
      ? "B"
      : percentage >= 60
      ? "C"
      : percentage >= 50
      ? "D"
      : "F";

  const division =
    percentage >= 60
      ? "First Division"
      : percentage >= 45
      ? "Second Division"
      : percentage >= 33
      ? "Third Division"
      : "Fail";

  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <h1 className="text-2xl font-bold text-center">
        {allFilled
          ? `Obtained: ${obtained}/${totalMax} | ${percentage.toFixed(
              2
            )}% | Grade: ${grade} | Division: ${division}`
          : "Enter all subjects marks to preview result"}
      </h1>
      {/* controlled input fiels */}
      {subjects.map((s) => (
        <input
          key={s}
          type="number"
          name={s}
          placeholder={`${s} (0-100)`}
          value={marks[s]}
          onChange={handleChange}
          className="border p-2 rounded w-64"
        />
      ))}
      <button
        className="px-6 py-2 bg-gray-200 rounded hover:bg-gray-300"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
}
