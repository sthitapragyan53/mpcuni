import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="glass-header">
      {/* Top Row: Logo, Primary Links, and Search */}
      <div className="header-main-row">
        <div className="header-left-group">
          <div className="crest-wrapper">
            {/* Replace with your actual crest SVG or Image */}
            <img src="/path-to-your-crest.png" alt="University Crest" className="crest-img" />
          </div>
          <nav className="primary-nav">
            <a href="#admissions">ADMISSIONS ▾</a>
            <a href="#research">RESEARCH ▾</a>
            <a href="#news">NEWS & EVENTS ▾</a>
            <a href="#about">ABOUT ▾</a>
          </nav>
        </div>

        <div className="header-right-group">
          <div className="search-wrapper">
            <input type="text" placeholder="Search..." className="glass-search" />
            <span className="search-icon">🔍</span>
          </div>
        </div>
      </div>

      {/* Subtle Horizontal Line */}
      <div className="header-divider"></div>

      {/* Bottom Row: Pill Navigation */}
      <nav className="pill-nav-container">
        <button className="nav-pill active">UNDERGRADUATE ❯</button>
        <button className="nav-pill">STUDENT LIFE ▾</button>
        <button className="nav-pill">COURSES ▾</button>
        <button className="nav-pill">FEES AND FUNDING ▾</button>
        <button className="nav-pill">APPLYING TO OXFORD ▾</button>
        <button className="nav-pill">INCREASING ACCESS ▾</button>
        <button className="nav-pill">OPEN DAYS AND VISITS ▾</button>
      </nav>
    </header>
  );
};

export default Header;