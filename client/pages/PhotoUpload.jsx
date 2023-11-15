import React, { useState } from 'react';
import axios from 'axios';

const PhotoUpload = (props) => {
  const [uploadedFile, setUploadedFile] = useState(null);
  //const { user } = props;

  const onFileChange = (event) => {
    console.log(event.target.files);
    setUploadedFile(event.target.files[0]);
  };

  const onFileUpload = () => {
    //console.log(uploadedFile);
    const formData = new FormData();
    formData.append('user', uploadedFile, uploadedFile.name);
    //console.log(formData);
  };
  return (
    <div>
      <input
        type="file"
        onChange={(e) => onFileChange(e)}
      />
      <button
        onClick={() => onFileUpload()}
      >Upload Photo
      </button>
    </div>
  );
};

export default PhotoUpload;
