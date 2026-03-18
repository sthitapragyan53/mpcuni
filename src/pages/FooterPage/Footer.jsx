import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="university-footer">
      <div className="footer-content">
        {/* Column 1: Identity */}
        <div className="footer-col">
          <h2 className="footer-logo">UNIVERSITY</h2>
          <p className="footer-description">
            Advancing excellence in engineering, technology, and research since 1956. 
            Member of the global academic community.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h4>Admissions</h4>
          <ul>
            <li><a href="#home">Undergraduate</a></li>
            <li><a href="#courses">Graduate</a></li>
            <li><a href="#colleges">Colleges</a></li>
            <li><a href="#testimonials">Student Stories</a></li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div className="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">University Libraries</a></li>
            <li><a href="#">Museums & Collections</a></li>
            <li><a href="#">Open Days</a></li>
            <li><a href="#">Jobs at University</a></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>VSSUT, Burla, Sambalpur</p>
          <p>Odisha, India - 768018</p>
          <p>Email: info@university.ac.in</p>
          <div className="social-links">
            <span>FB</span> <span>TW</span> <span>IG</span> <span>LI</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Sthita Pragyan Nayak. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Accessibility</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;