import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UploadPage from './UploadPage';
import GalleryPage from './GalleryPage';
import PhotoDetailsPage from './PhotoDetailsPage';
import WelcomePage from './WelcomePage';
import './App.css'; // Import the CSS file

function App() {
  const [photos, setPhotos] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/upload" element={<UploadPage addPhoto={(photo) => setPhotos([...photos, photo])} />} />
        <Route path="/gallery" element={<GalleryPage photos={photos} setPhotos={setPhotos} />} />
        <Route path="/details/:id" element={<PhotoDetailsPage photos={photos} />} />
      </Routes>
    </Router>
  );
}

export default App;
