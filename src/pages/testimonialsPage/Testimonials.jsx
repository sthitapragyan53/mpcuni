import React from 'react';
import './Testimonials.css';

// Replace with your student images
import student1 from '../../images/student1.jpg';
import student2 from '../../images/student2.jpg';

const testimonialData = [
  {
    id: 1,
    name: "Sthita Pragyan Nayak",
    course: "B.Tech in Electronics and Telecommunication",
    university: "VSSUT, Burla",
    quote: "The collaborative environment and technical rigor here have been instrumental in my journey as a developer. From VLSI to MERN stack projects, the support system is unmatched.",
    image: student1
  },
  {
    id: 2,
    name: "Adarsh Kumar",
    course: "Computer Science Engineering",
    university: "VSSUT, Burla",
    quote: "The opportunity to work on real-world applications while pursuing my degree has given me a unique edge in the industry. It's more than just a course; it's a community.",
    image: student2
  }
];

export default function Testimonials() {
  return (
    <div className="testimonials-container">
      <h1 className="testimonials-main-title">Student Stories</h1>
      
      <div className="stories-grid">
        {testimonialData.map((student) => (
          <div key={student.id} className="story-card">
            <div className="student-image-wrapper">
              <img src={student.image} alt={student.name} className="student-photo" />
            </div>
            
            <div className="story-content">
              <div className="quote-icon">“</div>
              <p className="student-quote">{student.quote}</p>
              
              <div className="student-info">
                <h3 className="student-name">{student.name}</h3>
                <p className="student-details">{student.course}</p>
                <p className="student-uni">{student.university}</p>
              </div>
              
              <button className="read-story-btn">Read full story ❯</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}