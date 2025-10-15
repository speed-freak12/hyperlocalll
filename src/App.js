import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Browse from './pages/Browse';
import HowItWorks from './pages/HowItWorks';
import BecomeTeacher from './pages/BecomeTeacher';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import TutorDetail from './pages/TutorDetail'; // Import the new page
import './App.css'; 
import Tutors from './pages/Tutors';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/tutors" element={<Tutors />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/become-a-teacher" element={<BecomeTeacher />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            
            {/* Add the new dynamic route for tutor details */}
            <Route path="/tutor/:id" element={<TutorDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;