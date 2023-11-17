import React, { useState } from 'react';
import axios from 'axios';

const PhotoUpload = (props) => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const onFileChange = (event) => {
    setUploadedFile(event.target.files[0]);
  };

  const onFileUpload = async (event) => {
    const data = new FormData();
    data.append('uploaded_file', uploadedFile);

    axios.post('/upload', data)
      .then((response) => console.log('cloudinary SUCCESS', response.data))
      .catch((err) => console.error('could not post to cloud', err));
  };
  return (
    <div>
      <form
        encType="multipart/form-data"
      >
        <input
          type="file"
          name="uploaded_file"
          onChange={(e) => onFileChange(e)}
        />
        <button
          type="button"
          onClick={(e) => onFileUpload(e)}
        >Upload Photo
        </button>
      </form>
    </div>
  );
};

export default PhotoUpload;
