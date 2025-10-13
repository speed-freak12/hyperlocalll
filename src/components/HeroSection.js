import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>
        Learn anything,
        <br />
        <span className="highlight">from anyone next door.</span>
      </h1>
      <p>
        From cooking to coding, connect with local experts for face-to-face lessons. Learn a new skill, meet your neighbors.
      </p>
      <div className="search-bar">
        <input type="text" placeholder="What do you want to learn" />
        <span className="divider">|</span>
        <input type="text" placeholder="Enter your location" />
        <button>Search</button>
      </div>
    </div>
  );
}

export default HeroSection;