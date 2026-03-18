import React from 'react';
import './colleges.css';

// Placeholder images - replace with your actual VSSUT/College assets
import collegeImg1 from '../../images/college1.jpg';
import collegeImg2 from '../../images/college2.jpg';
import collegeImg3 from '../../images/college3.jpg';

const CollegePage = () => {
  return (
    <div className="colleges-container">
      <h1 className="colleges-title">Colleges</h1>
      
      <div className="colleges-grid">
        {/* Row 1, Card 1: Feature Card */}
        <div className="college-card feature">
          <img src={collegeImg1} alt="Campus life" className="card-image" />
          <div className="card-content">
            <h3>What are Oxford colleges?</h3>
            <p>Oxford is made up of over 30 colleges and halls providing every student with a safe and supportive environment from day one.</p>
            <button className="read-more-btn">Read more ❯</button>
          </div>
        </div>

        {/* Row 1, Card 2: Feature Card */}
        <div className="college-card feature">
          <img src={collegeImg2} alt="College exterior" className="card-image" />
          <div className="card-content">
            <h3>Do you choose a college?</h3>
            <p>Not exactly. You can put a college's campus code on your UCAS form to specify a preference but you might still be shortlisted.</p>
            <button className="read-more-btn">Read more ❯</button>
          </div>
        </div>

        {/* Row 1, Card 3: Vertical Link Stack */}
        <div className="college-links-column">
          <div className="link-card">
            <h3>A-Z of colleges</h3>
            <p>All undergraduate students at Oxford become members of a particular college, and of the whole University.</p>
            <button className="read-more-btn">Read more ❯</button>
          </div>
          <div className="link-card border-top">
            <h3>Open Days and visiting</h3>
            <p>Come to Oxford and discover for yourself student life at our University.</p>
            <button className="read-more-btn">Read more ❯</button>
          </div>
        </div>

        {/* Row 2, Card 1: Wide Feature Card */}
        <div className="college-card feature wide">
          <img src={collegeImg3} alt="Architecture" className="card-image" />
          <div className="card-content">
            <h3>Which Oxford colleges offer my course?</h3>
            <p>Oxford colleges do not specialize in particular subject areas, as they all excel in all subjects.</p>
          </div>
        </div>

        {/* Row 2, Card 2: More Links */}
        <div className="college-links-column">
           <div className="link-card">
            <h3>College facilities</h3>
            <p>All Oxford colleges offer the same excellence in teaching, but they do vary in terms of their size.</p>
            <button className="read-more-btn">Read more ❯</button>
          </div>
          <div className="link-card border-top">
            <h3>Living in Oxford</h3>
            <p>Oxford is a young city with 40,000 students across the area.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegePage;