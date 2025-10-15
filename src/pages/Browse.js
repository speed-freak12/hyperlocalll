import React from 'react';
import { Navigate } from 'react-router-dom';

function Browse() {
  return <Navigate to="/tutors" replace />;
}

export default Browse;