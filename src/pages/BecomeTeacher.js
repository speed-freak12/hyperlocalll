import React, { useState } from 'react';
import './AuthForm.css'; // We can reuse the same CSS!

function BecomeTeacher() {
  const [name, setName] = useState('');
  const [skill, setSkill] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const teacherData = { name, skill, price, location };
    console.log('New Teacher Application:', teacherData);
    alert('Thank you for your application! We will review it shortly.');
    // In a real app, you would save this data to your database (e.g., Firebase Firestore)
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h1>Become a Teacher</h1>
        <p style={{ color: '#c0c0c0', marginTop: '-15px', marginBottom: '25px' }}>
          Share your passion and skills with your local community.
        </p>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Skill You Want to Teach (e.g., Guitar, Baking)</label>
          <input type="text" value={skill} onChange={(e) => setSkill(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Your Location (e.g., Koramangala)</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Price per Hour (e.g., ₹1200/hr)</label>
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <button type="submit" className="auth-button">Submit Application</button>
      </form>
    </div>
  );
}

export default BecomeTeacher;