import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { auth } from '../firebase'; // We need this to check the user's status
import './TutorDetail.css'; // We'll create this CSS file next

// We need the same tutor data here for now.
// In a real app, you'd fetch this from a database.
const tutors = [
  { 
    id: 1, name: 'Aisha Khan', skill: 'Guitar Lessons', location: 'Koramangala', price: '₹1200/hr', color: '#7A5CFA',
    description: 'With over 5 years of experience, Aisha provides personalized guitar lessons for all ages, focusing on rock, blues, and acoustic styles. She believes in making learning fun and accessible.'
  },
  { 
    id: 2, name: 'Rohan Mehta', skill: 'React Development', location: 'Indiranagar', price: '₹2500/hr', color: '#9065FD',
    description: 'A senior software engineer specializing in frontend technologies. Rohan offers project-based mentorship to help you master React, build a strong portfolio, and prepare for interviews.'
  },
  { 
    id: 3, name: 'Priya Sharma', skill: 'Baking & Pastry', location: 'Jayanagar', price: '₹1800/hr', color: '#E84A7F',
    description: 'Professional pastry chef trained in classic French techniques. Priya’s classes cover everything from basic bread-making to advanced cake decoration. All materials provided.'
  },
  { 
    id: 4, name: 'Vikram Singh', skill: 'Yoga & Wellness', location: 'Koramangala', price: '₹1500/hr', color: '#27AE60',
    description: 'Certified Hatha and Vinyasa yoga instructor. Vikram focuses on building strength, flexibility, and mindfulness. Sessions can be tailored for beginners or advanced practitioners.'
  },
];

function TutorDetail() {
  const { id } = useParams(); // Gets the 'id' from the URL (e.g., /tutor/1)
  const navigate = useNavigate(); // Hook to allow us to redirect users

  const tutor = tutors.find(t => t.id === parseInt(id));

  const handleGetInTouch = () => {
    // Check Firebase to see if a user is currently logged in
    if (auth.currentUser) {
      // If they are logged in, show their contact info
      alert(`Great! You can contact ${tutor.name} at teacher@example.com`);
    } else {
      // If they are not logged in, redirect them to the login page
      alert("Please log in to get in touch with a tutor.");
      navigate('/login');
    }
  };

  if (!tutor) {
    return <div className="tutor-not-found">Tutor not found!</div>;
  }

  return (
    <div className="tutor-detail-container">
      <div className="tutor-detail-card">
        <div className="tutor-detail-header" style={{ backgroundColor: tutor.color }}>
          <h1>{tutor.skill}</h1>
          <h2>Taught by {tutor.name}</h2>
        </div>
        <div className="tutor-detail-body">
          <p>{tutor.description}</p>
          <div className="info-grid">
            <div className="info-block">
              <span className="info-label">📍 Location</span>
              <span className="info-value">{tutor.location}</span>
            </div>
            <div className="info-block">
              <span className="info-label">💰 Pricing</span>
              <span className="info-value">{tutor.price}</span>
            </div>
          </div>
          <button onClick={handleGetInTouch} className="get-in-touch-btn">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}

export default TutorDetail;