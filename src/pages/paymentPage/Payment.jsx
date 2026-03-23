import React, { useState } from "react";
import "./payment.css";

const Payment = () => {
  const [step, setStep] = useState(1);

  const next = () => setStep(step + 1);
  const prev = () => setStep(step - 1);

  return (
    <div className="payment-page">

      {/* Progress */}
      <div className="steps">
        <span className={step >= 1 ? "active" : ""}>Fees</span>
        <span className={step >= 2 ? "active" : ""}>Extras</span>
        <span className={step >= 3 ? "active" : ""}>Payment</span>
        <span className={step >= 4 ? "active" : ""}>Done</span>
      </div>

      <div className="payment-container">

        {/* LEFT */}
        <div className="payment-left">

          {step === 1 && (
            <>
              <h2>Select Fees</h2>
              <p>Semester 3 Tuition Fee</p>
              <button onClick={next}>Continue</button>
            </>
          )}

          {step === 2 && (
            <>
              <h2>Extras</h2>
              <p>Add Hostel / Transport (optional)</p>
              <button onClick={next}>Continue</button>
              <button onClick={prev} className="back">Back</button>
            </>
          )}

          {step === 3 && (
            <>
              <h2>Payment Method</h2>

              <div className="payment-methods">
                <button>💳 Card</button>
                <button>📱 UPI</button>
                <button>🏦 Net Banking</button>
              </div>

              <button onClick={next}>Pay Now</button>
              <button onClick={prev} className="back">Back</button>
            </>
          )}

          {step === 4 && (
            <div className="success">
              <h2>✅ Payment Successful</h2>
              <p>Your fees has been paid successfully</p>
              <button>Download Receipt</button>
            </div>
          )}

        </div>

        {/* RIGHT SUMMARY */}
        <div className="payment-right">
          <h3>Summary</h3>

          <p>Semester Fee: ₹80,000</p>
          <p>Extras: ₹2,000</p>
          <hr />
          <h2>Total: ₹82,000</h2>
        </div>

      </div>
    </div>
  );
};

export default Payment;