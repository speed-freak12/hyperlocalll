import React from 'react';
import './HowItWorks.css'; // We'll create this file next

function HowItWorks() {
  return (
    <div className="how-it-works-container">
      <div className="how-it-works-content">
        <h1>How Hyperlocal Works</h1>
        <p className="subtitle">Connecting learners and teachers in your neighborhood is simple.</p>
        
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <h2>Find a Skill</h2>
            <p>Browse through a variety of skills offered by talented individuals right in your community, from coding and cooking to music and yoga.</p>
          </div>
          
          <div className="step-card">
            <div className="step-number">2</div>
            <h2>Get in Touch</h2>
            <p>View a teacher's profile to learn more about their experience, location, and pricing. Sign up or log in to connect with them directly and arrange a lesson.</p>
          </div>
          
          <div className="step-card">
            <div className="step-number">3</div>
            <h2>Learn & Grow</h2>
            <p>Meet your local expert for face-to-face lessons. Learn a new skill, share your passion, and build connections with the people around you.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;