import React from "react";
import "./home.css";
import logo from "../../assets/logo.png";
import studentPhoto from "../../assets/student-pfp.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const student = {
    name: "Sthita Pragyan Nayak",
    regNo: "21BCE0001",
    year: "3rd Year",
    branch: "Electronics & Telecommunication",
    status: "Premium Member",
    attendance: "85%"
  };

  const attributes = [
    { label: "Birthday", value: "29.12", weight: "1.6%" },
    { label: "Year", value: student.year, weight: "Current" },
    { label: "Branch", value: "ETC", weight: "VSSUT" },
    { label: "Blood Grp", value: "O+", weight: "Rh+" },
  ];

  // 🔹 Copy Reg No
  const handleCopy = () => {
    navigator.clipboard.writeText(student.regNo);
    alert("Registration number copied!");
  };

  // 🔹 Logout
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="portal-wrapper">

      {/* Top Navigation */}
      <div className="top-nav">
        <div className="brand">
          <img src={logo} alt="Logo" className="mini-logo" />
          <span className="portal-name">Student Portal</span>
        </div>

        <button className="logout-pill" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <main className="main-card">

        {/* Welcome Section */}
        <div className="welcome-block">
          <h2>
            Welcome back,{" "}
            <span className="highlight">
              {student.name.split(" ")[0]}
            </span>{" "}
            👋
          </h2>

          <div className="badges">
            <span className="status-badge">{student.status}</span>
            <span className="attendance-badge">
              Attendance: {student.attendance}
            </span>
          </div>
        </div>

        <div className="content-layout">

          {/* Left Side */}
          <div className="info-side">

            <div className="header-block">
              <span className="sub-text">Student Profile</span>
              <h1 className="main-title">{student.name}</h1>

              <div className="transaction-row">
                <div className="id-pill">
                  <span className="label">REG NO</span>
                  <span className="val">{student.regNo}</span>
                </div>

                <button className="copy-btn" onClick={handleCopy}>
                  📋 Copy
                </button>
              </div>
            </div>

            {/* Attributes */}
            <div className="attribute-section">
              <h3>Attributes</h3>

              <div className="attribute-grid">
                {attributes.map((attr, i) => (
                  <div key={i} className="attr-chip">
                    <div className="attr-header">
                      <span>{attr.label}</span>
                      <span className="percent">{attr.weight}</span>
                    </div>
                    <div className="attr-val">{attr.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="image-side">
            <div className="pfp-container">
              <img src={studentPhoto} alt="Student" />
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="action-footer">

          <button className="nav-card">
            <span className="btn-tag">Finance</span>
            <h4>Pending Fees</h4>
            <p>Check your semester dues and payment history.</p>
          </button>

          <button className="nav-card">
            <span className="btn-tag">Academic</span>
            <h4>View Results</h4>
            <p>Access your CGPA and semester marksheets.</p>
          </button>

          <button className="nav-card">
            <span className="btn-tag">Analytics</span>
            <h4>Check Score</h4>
            <p>Performance tracking and subject analytics.</p>
          </button>

        </div>
      </main>
    </div>
  );
};

export default Home;