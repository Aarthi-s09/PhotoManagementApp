import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function GalleryPage({ photos, setPhotos }) {
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch('https://photobackend-hhgk.onrender.com/photos');
        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, [setPhotos]); 

  return (
    <div className='maingallary'>
      <div className="gallery-page">
        <h1>Photo Gallery</h1>
        <div className="gallery">
          {photos.length > 0 ? (
            photos.map((photo) => (
              <Link to={`/details/${photo._id}`} key={photo._id}>
                <div className="photo-card">
                  <img src={photo.imageUrl} alt={photo.title} />
                  <h3>{photo.title}</h3>
                  <p>{photo.description}</p>
                </div>
              </Link>
            ))
          ) : (
            <p>No photos to display</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;
