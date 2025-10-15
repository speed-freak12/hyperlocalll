import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { auth } from '../firebase'; // We need this to check the user's status
import './TutorDetail.css'; // We'll create this CSS file next
import { getTutorById } from '../data/tutors';

// Load from centralized dataset by ID

function TutorDetail() {
  const { id } = useParams(); // Gets the 'id' from the URL (e.g., /tutor/1)
  const navigate = useNavigate(); // Hook to allow us to redirect users

  const tutor = getTutorById(id);

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