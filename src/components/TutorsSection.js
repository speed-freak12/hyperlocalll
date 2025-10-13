import React from 'react';
import Tilt from 'react-parallax-tilt'; 
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll'; // For smooth scrolling
import './TutorsSection.css';

// The full tutors array data
const tutors = [
  { 
    id: 1,
    name: 'Aisha Khan', 
    skill: 'Guitar Lessons',
    location: 'Koramangala',
    price: '₹1200/hr',
    color: '#7A5CFA' 
  },
  { 
    id: 2,
    name: 'Rohan Mehta', 
    skill: 'React Development',
    location: 'Indiranagar',
    price: '₹2500/hr',
    color: '#9065FD' 
  },
  { 
    id: 3,
    name: 'Priya Sharma', 
    skill: 'Baking & Pastry',
    location: 'Jayanagar',
    price: '₹1800/hr',
    color: '#E84A7F' 
  },
  { 
    id: 4,
    name: 'Vikram Singh', 
    skill: 'Yoga & Wellness',
    location: 'Koramangala',
    price: '₹1500/hr',
    color: '#27AE60' 
  },
];

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
        {tutors.map(tutor => (
          <TutorCard key={tutor.id} tutor={tutor} />
        ))}
      </div>
    </Element>
  );
}

export default TutorsSection;