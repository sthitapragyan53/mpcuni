import React from "react";
import "./about.css";
import personImg from "./image/person.png"; // Replace with your image

const AboutFirm = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left Side: Content */}
        <div className="content-side">
          <div className="badge">ABOUT US</div>
          <h1 className="main-heading">About our firm</h1>
          <p className="description">
            At our firm, we pride ourselves on delivering tailored solutions 
            that empower businesses to thrive. With years of experience 
            across various industries, our dedicated team is committed to 
            driving growth and operational excellence.
          </p>

          <div className="button-group">
            <button className="btn-primary">
              Get Started <span className="arrow">→</span>
            </button>
            <button className="btn-secondary">Free trial</button>
          </div>

          <hr className="divider" />

          {/* Stats Row */}
          <div className="stats-container">
            <div className="stat-item">
              <h2>95%</h2>
              <p>Complete customer satisfaction</p>
            </div>
            <div className="stat-item">
              <h2>10+</h2>
              <p>Innovation and valuable insight</p>
            </div>
            <div className="stat-item">
              <h2>$10m</h2>
              <p>Highly efficient financial strategies</p>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="image-side">
          <img src={personImg} alt="Firm Member" className="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default AboutFirm;