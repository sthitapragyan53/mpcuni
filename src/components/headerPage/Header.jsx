// components/Header.jsx
import './Header.css';

export default function Header() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">VSSUT ADMISSIONS</div>
        <div className="nav-links">
          <a href="#home" className="nav-item">Home</a>
          <a href="#courses" className="nav-item">Courses</a>
          <a href="#about" className="nav-item">About</a>
          <a href="#testimonials" className="nav-item">Reviews</a>
        </div>
      </div>
    </nav>
  );
}