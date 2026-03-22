import React from "react";
import "./result.css";

const Result = () => {
  const student = {
    name: "Sthita Pragyan Nayak",
    regNo: "21BCE0001",
    branch: "Electronics & Telecommunication",
    exam: "April / May 2025",
  };

  const subjects = [
    { code: "EE6834", grade: "B+", result: "PASS" },
    { code: "EE0031", grade: "A", result: "PASS" },
    { code: "EE6071", grade: "A+", result: "PASS" },
    { code: "GE5051", grade: "B", result: "PASS" },
    { code: "GE5071", grade: "A", result: "PASS" },
    { code: "GE5072", grade: "A+", result: "PASS" },
  ];

  return (
    <div className="result-page">

      <div className="result-card">

        <div className="header">
          <h1>Result Dashboard</h1>
          <p>{student.exam}</p>
        </div>

        {/* Student Info */}
        <div className="student-info">
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Register No:</strong> {student.regNo}</p>
          <p><strong>Branch:</strong> {student.branch}</p>
        </div>

        {/* Table */}
        <table className="result-table">
          <thead>
            <tr>
              <th>Subject Code</th>
              <th>Grade</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {subjects.map((sub, index) => (
              <tr key={index}>
                <td>{sub.code}</td>
                <td>{sub.grade}</td>
                <td className="pass">{sub.result}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Summary */}
        <div className="summary">
          <h3>Overall GPA: 8.7</h3>
          <span className="badge">All Subjects Passed 🎉</span>
        </div>

      </div>
    </div>
  );
};

export default Result;