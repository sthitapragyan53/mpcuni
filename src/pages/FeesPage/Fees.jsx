import React from "react";
import "./fees.css";

const Fees = () => {
  const paidFees = [
    {
      semester: "Semester 1",
      amount: "₹75,000",
      date: "12 Aug 2023",
      status: "Paid",
    },
    {
      semester: "Semester 2",
      amount: "₹75,000",
      date: "10 Jan 2024",
      status: "Paid",
    },
  ];

  const pendingFees = [
    {
      semester: "Semester 3",
      amount: "₹80,000",
      due: "30 Mar 2026",
      fine: "₹2,000",
    },
  ];

  return (
    <div className="fees-page">

      <h1>Fees Dashboard</h1>
      <p className="subtitle">Track your payments and dues</p>

      <div className="fees-grid">

        {/* Paid Fees */}
        {paidFees.map((fee, index) => (
          <div key={index} className="fee-card paid">
            <span className="badge success">Paid</span>

            <h2>{fee.semester}</h2>
            <h3>{fee.amount}</h3>

            <p>Paid on: {fee.date}</p>

            <button className="btn dark">View Receipt</button>

            <ul>
              <li>✔ Tuition Fee Included</li>
              <li>✔ No Pending Dues</li>
            </ul>
          </div>
        ))}

        {/* Pending Fees */}
        {pendingFees.map((fee, index) => (
          <div key={index} className="fee-card pending">
            <span className="badge warning">Pending</span>

            <h2>{fee.semester}</h2>
            <h3>{fee.amount}</h3>

            <p>Due Date: {fee.due}</p>
            <p className="fine">Fine: {fee.fine}</p>

            <button className="btn pay">Pay Now</button>

            <ul>
              <li>⚠ Payment Required</li>
              <li>⚠ Late Fee Applicable</li>
            </ul>
          </div>
        ))}

        {/* Fine Card */}
        <div className="fee-card fine-card">
          <span className="badge danger">Fine</span>

          <h2>Late Payment Fee</h2>
          <h3>₹2,000</h3>

          <p>Applied due to delay in Semester 3 fees</p>

          <button className="btn light">Resolve Now</button>

          <ul>
            <li>⚠ Pay Immediately</li>
            <li>⚠ May increase further</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Fees;