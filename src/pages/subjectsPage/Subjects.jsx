import React from "react";
import "./subjects.css";

const Subjects = () => {
  const student = {
    branch: "ETC",
    year: "3rd Year",
  };

  // Subjects based on branch (demo)
  const subjects = [
    { name: "Digital Communication", code: "EC601" },
    { name: "Microprocessors", code: "EC602" },
    { name: "Control Systems", code: "EC603" },
    { name: "VLSI Design", code: "EC604" },
    { name: "Signals & Systems", code: "EC605" },
    { name: "Embedded Systems", code: "EC606" },
  ];

  return (
    <div className="subjects-page">

      <h1>My Subjects</h1>
      <p className="subtitle">
        {student.branch} • {student.year}
      </p>

      <div className="subjects-grid">
        {subjects.map((sub, index) => (
          <div key={index} className="subject-card">
            <h3>{sub.name}</h3>
            <span>{sub.code}</span>

            <button className="open-btn">
              Open Subject →
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Subjects;