import React, { useState } from "react";

export default function MarksFormTwo() {
  const [students, setStudents] = useState([
    {
      name: "",
      marks: { english: "", math: "", science: "", computer: "", urdu: "" },
    },
  ]);
  const subjects = ["english", "math", "science", "computer", "urdu"];
  const totalMax = subjects.length * 100;
  const handleNameChange = (index, value) => {
    const updated = [...students];
    updated[index].name = value;
    setStudents(updated);
  };
  const handleMarksChange = (index, subject, value) => {
    const num = Number(value);
    if ((value = "" || (num >= 0 && num <= 100))) {
      const updated = [...students];
      updated[index].marks[subject] = value;
      setStudents(updated);
    }
  };
  const handleAddStudent = () => {
    setStudents((prev) => [
      ...prev,
      {
        name: "",
        marks: {
          english: "",
          math: "",
          science: "",
          computer: "",
          urdu: "",
        },
      },
    ]);
  };
  const handleReset = () => {
    setStudents([
      {
        name: "",
        marks: {
          english: "",
          math: "",
          science: "",
          computer: "",
          urdu: "",
        },
      },
    ]);
  };
  const calculateResult = () => {
    const allFilled = subjects.every((s) => marks[s] !== "");
    const obtained = allFilled
      ? subjects.reduce((sum, s) => sum + Number(marks[s]), 0)
      : 0;
    const percentage = allFilled ? (obtained / totalMax) * 100 : 0;
  };
  return <div></div>;
}
