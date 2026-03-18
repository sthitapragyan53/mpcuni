import React, { useState } from 'react';
import './Courses.css';

const courseData = [
  {
    category: "Languages and literature",
    subCourses: [
      "English Language and Literature",
      "European and Middle Eastern Languages",
      "Psychology, Philosophy & Linguistics",
      "Modern Languages",
      "Oriental Studies"
    ]
  },
  { category: "The Natural World", subCourses: [] },
  { category: "Art & Music", subCourses: [] },
  { category: "Medical Sciences", subCourses: [] },
  { category: "Philosophical questions", subCourses: [] },
  { category: "Physical Sciences", subCourses: [] },
  { category: "Researching the past", subCourses: [] },
  { category: "Using Mathematics", subCourses: [] },
  { category: "People and Society", subCourses: [] }
];

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState("Languages and literature");

  return (
    <div className="courses-page">
      <h1 className="section-main-title">Courses</h1>
      
      <div className="courses-layout">
        {/* Left Column: Intro Text */}
        <aside className="intro-column">
          <p>
            Do you love to question and have an appetite for knowledge? 
            Do you consistently achieve top grades in your class? 
            Are you looking for an exceptional education in an environment 
            which values individuals for who they are? Oxford might be the place for you.
          </p>
        </aside>

        {/* Right Column: Accordion List */}
        <div className="accordion-column">
          {courseData.map((item) => (
            <div 
              key={item.category} 
              className={`accordion-item ${activeCategory === item.category ? 'active' : ''}`}
              onClick={() => setActiveCategory(item.category)}
            >
              <div className="category-header">
                <span className="category-name">{item.category}</span>
                
                {/* Sub-courses list (only shows if active) */}
                {activeCategory === item.category && item.subCourses.length > 0 && (
                  <ul className="subcourse-list">
                    {item.subCourses.map(course => (
                      <li key={course}>{course}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}