const cloudinary = require('cloudinary').v2;
//require('./db/cloudinary_config.js');
const { cloudinaryKeys } = require('../config/keys.js');
//const apiSecret = cloudinary.config().api_secret;

const createSignature = () => {
  const timestamp = Math.round((new Date()).getTime() / 1000);

  const signature = cloudinary.utils.api_sign_request(
    {
      timestamp,
      eager: 'c_pad,h_300,w_400|c_crop,h_200,w_260',
      folder: 'test'
    },
    cloudinaryKeys.apiSecret
  );

  return { timestamp, signature };
};

module.exports = {
  createSignature
};
