import React from 'react';
import Tilt from 'react-parallax-tilt'; 
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll'; // For smooth scrolling
import './TutorsSection.css';
import { getAllTutors } from '../data/tutors';

// Featured tutors from the shared dataset
const displayTutors = getAllTutors().slice(0, 8);

// The full TutorCard component
function TutorCard({ tutor }) {
  return (
    <Link to={`/tutor/${tutor.id}`} className="tutor-card-link">
      <Tilt>
        <div className="tutor-card">
          <div className="card-header" style={{ backgroundColor: tutor.color }}>
            <h3>{tutor.skill}</h3>
          </div>
          <div className="card-body">
            <h2>{tutor.name}</h2>
          </div>
          <div className="card-footer">
            <div className="info-item">📍 {tutor.location}</div>
            <div className="info-item">💰 {tutor.price}</div>
          </div>
        </div>
      </Tilt>
    </Link>
  );
}

// The TutorsSection component with the Element wrapper
function TutorsSection() {
  return (
    <Element name="tutorsSection" className="tutors-container">
      <h2>Meet Our Top Tutors</h2>
      <div className="tutors-grid">
        {displayTutors.map(tutor => (
          <TutorCard key={tutor.id} tutor={tutor} />
        ))}
      </div>
    </Element>
  );
}

export default TutorsSection;