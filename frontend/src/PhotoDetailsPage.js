import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function PhotoDetailsPage({ photos }) {
  const { id } = useParams();  // id is a string
  const navigate = useNavigate();

  // Find the photo by matching the id directly as a string
  const photo = photos.find((p) => p._id === id);

  if (!photo) {
    return <div>Photo not found</div>;
  }

  return (
    <div className='mainphotodetails'>
    <div className="photo-details-page">
      <button onClick={() => navigate('/gallery')}>Back to Gallery</button>
      <img src={photo.imageUrl} alt={photo.title} />
      <h2>{photo.title}</h2>
      <p>{photo.description}</p>
    </div></div>
  );
}

export default PhotoDetailsPage;
