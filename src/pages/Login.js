import React, { useState } from 'react';
import { auth } from '../firebase'; // Import auth from your firebase.js file
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import './AuthForm.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("Successfully logged in with email:", user);
        alert("Successfully logged in!");
        // Here you would typically redirect the user
        // e.g., window.location.href = '/dashboard';
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error("Error logging in:", errorMessage);
        alert(errorMessage); // Show an error to the user
      });
  };

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("Successfully signed in with Google:", user);
        alert("Successfully signed in with Google!");
        // Here you would typically redirect the user
      }).catch((error) => {
        console.error("Error with Google sign in:", error.message);
      });
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h1>Log In to Your Account</h1>
        <form onSubmit={handleEmailLogin}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="auth-button">Log In</button>
        </form>
        <div className="divider">OR</div>
        <button onClick={handleGoogleSignIn} className="google-button">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google logo" />
          Continue with Google
        </button>
      </div>
    </div>
  );
}

export default Login;