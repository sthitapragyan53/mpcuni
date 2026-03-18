import React from 'react';
import './home.css';
import universityImage from '../../images/universityImage.jpg'; 

export default function Home() {
  return (
    <div className="home-wrapper">
      {/* Top Main Navigation */}
      <header className="main-header">
        <div className="logo-container">
           {/* Replace with your logo SVG/Image */}
           <div className="mock-logo">UNIVERSITY</div>
        </div>
        <nav className="top-nav">
          <a href="#admissions">ADMISSIONS ▾</a>
          <a href="#research">RESEARCH ▾</a>
          <a href="#news">NEWS & EVENTS ▾</a>
          <a href="#about">ABOUT ▾</a>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
      </header>

      {/* Sub-Navigation (Pill Buttons) */}
      <nav className="pill-nav">
        <button className="pill active">UNDERGRADUATE ❯</button>
        <button className="pill">STUDENT LIFE ▾</button>
        <button className="pill">COURSES ▾</button>
        <button className="pill">FEES AND FUNDING ▾</button>
        <button className="pill">APPLYING TO OXFORD ▾</button>
      </nav>

      {/* Hero Section */}
      <main className="hero-container">
        <h1 className="hero-title">
          Undergraduate <br /> admissions
        </h1>
        
        <div className="hero-image-box">
          <img 
            src={universityImage} 
            alt="University Campus" 
            className="hero-image"
          />
        </div>
      </main>
    </div>
  );
}