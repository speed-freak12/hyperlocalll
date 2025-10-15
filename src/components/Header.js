import React from 'react';
import { Link as RouterLink } from 'react-router-dom'; // Keep router link
import './Header.css';

function Header() {
  return (
    <header className="header">
      <RouterLink to="/" className="logo">hyperlocal.</RouterLink>
      
      <nav className="nav-links">
        <RouterLink to="/tutors">Browse</RouterLink>
        <RouterLink to="/how-it-works">How It Works</RouterLink>
        <RouterLink to="/become-a-teacher">Become a Teacher</RouterLink>
      </nav>
      
      <div className="auth-buttons">
        <RouterLink to="/login" className="btn-login">Log In</RouterLink>
        <RouterLink to="/signup" className="btn-signup">Sign Up</RouterLink>
      </div>
    </header>
  );
}

export default Header;