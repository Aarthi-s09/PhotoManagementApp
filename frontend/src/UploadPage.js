import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UploadPage({ addPhoto }) {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file || !title || !description) {
      alert('Please fill all fields');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);
    formData.append('description', description);

    try {
      const response = await fetch('https://photobackend-hhgk.onrender.com/upload', {
        method: 'POST',
        body: formData,
      });

      const newPhoto = await response.json();
      addPhoto(newPhoto);
      navigate('/gallery');
    } catch (error) {
      console.error('Error uploading photo:', error);
    }
  };

  return (
    <div className='mainupload'>
    <div className="upload-page">
      <h2>Upload a Photo</h2>
      <input type="file" onChange={handleFileChange} />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleUpload}>Upload</button> 
    </div></div>
  );
}

export default UploadPage;
