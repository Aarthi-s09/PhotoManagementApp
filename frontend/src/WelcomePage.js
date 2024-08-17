import React from 'react';
import { Link } from 'react-router-dom';

function WelcomePage() {
  return (
    <div className='mainpage'>
    <div className="welcome-page">
      <h1>Welcome to the Photo Management App</h1>
      <p>Manage and view your photos easily.</p>
      <div className="welcome-buttons">
        <Link to="/upload">
          <button>Upload Photos</button>
        </Link>
        <Link to="/gallery">
          <button>View Gallery</button>
        </Link>
      </div>
    </div>
    </div>
  );
}

export default WelcomePage;
