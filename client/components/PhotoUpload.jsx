import React, { useState } from 'react';
import axios from 'axios';
//import cloudinary from 'cloudinary';
//import { upload } from 'cloudinary-react-native';
//import { cloudinaryKeys } from '../../config/keys';
//import { createSignature } from '../../server/cloudinary_signature';
//import Dropzone from 'react-dropzone';

const PhotoUpload = (props) => {
  const [uploadedFile, setUploadedFile] = useState(null);
  //const { user } = props;

  // const cld = new Cloudinary({ cloud: { cloudName: 'dx4mrqtne' }, url: { secure: true } });
  // const uploadOptions = {
  //   upload_preset: 'c6qq29ri',
  //   tag: 'test',
  //   unsigned: true
  // };
  const onFileChange = (event) => {
    console.log(event.target.files[0]);
    setUploadedFile(event.target.files[0]);
  };

  const onFileUpload = () => {
    //console.log(uploadedFile);
    //const timestamp = Math.round((new Date()).getTime() / 1000);
    //const sign = createSignature();
    //console.log(sign);
    const formData = new FormData();
    formData.append('file', uploadedFile.name);
    //console.log(uploadedFile.name);
    // formData.append('api_key', cloudinaryKeys.apiKey);
    //formData.append('upload_preset', 'c6qq29ri');
    // formData.append('timestamp', timestamp);
    // formData.append('eager', 'w_400,h_300,c_pad|w_260,h_200,c_crop');
    //formData.append('public_id', 'test');
    //formData.append('signature', signature);

    //console.log(cloudinary);
    // upload(cld, {
    //   file: uploadedFile.name,
    //   options: uploadOptions,
    //   callback: (error, response) => {
    //     if (error) {
    //       console.log('upload error', error);
    //     } else {
    //       console.log(response);
    //     }
    //   }
    // });
    //const imageURL = `https://res.cloudinary.com/dx4mrqtne/image/upload/${uploadedFile.name}`;

    // axios.post('/photos', { name: uploadedFile.name })
    //   .then((response) => console.log('cloudinary SUCCESS', response))
    //   .catch((err) => console.error('could not post to cloud', err));
    //curl https://api.cloudinary.com/v1_1/demo/image/upload -X POST --data 'file=sample.jpg&upload_preset=unsigned_1'

    // axios.post(
    //   'https://res.cloudinary.com/dx4mrqtne/image/upload',
    //   { file: uploadedFile.name, upload_preset: 'c6qq29ri', api_key: '447864974498634' },
    //   { headers: { 'X-Requested-With': 'XMLHttpRequest' } }
    // )
    //   .then((response) => console.log('succes', response))
    //   .catch((err) => console.error('fail', err));
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
