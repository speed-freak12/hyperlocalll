import React from 'react';
import { Link } from 'react-router-dom'; // <-- 1. IMPORT Link
import './Header.css';

function Header() {
  return (
    <header className="header">
      {/* 2. Change the logo to a Link to the homepage */}
      <Link to="/" className="logo">hyperlocal.</Link>
      
      <nav className="nav-links">
        {/* 3. Change all <a> tags to <Link> tags */}
        <Link to="/browse">Browse</Link>
        <Link to="/how-it-works">How It Works</Link>
        <Link to="/become-a-teacher">Become a Teacher</Link>
      </nav>
      
      <div className="auth-buttons">
        {/* 4. Also change the login/signup buttons */}
        <Link to="/login" className="btn-login">Log In</Link>
        <Link to="/signup" className="btn-signup">Sign Up</Link>
      </div>
    </header>
  );
}

export default Header;