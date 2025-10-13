import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import './AuthForm.css';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailSignUp = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Successfully created account:", user);
        alert("Account created successfully!");
        // Redirect user after successful sign-up
      })
      .catch((error) => {
        console.error("Error creating account:", error.message);
        alert(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("Successfully signed in with Google:", user);
        alert("Successfully signed in with Google!");
        // Redirect user
      }).catch((error) => {
        console.error("Error with Google sign in:", error.message);
      });
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h1>Create Your Account</h1>
        <form onSubmit={handleEmailSignUp}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="auth-button">Sign Up</button>
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

export default SignUp;