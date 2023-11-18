const cloudinary = require('cloudinary').v2;
const { cloudinaryKeys } = require('../../config/keys.js')
// Configure your cloud name, API key and API secret:

const myconfig = cloudinary.config({
  cloud_name: 'dx4mrqtne',
  api_key: cloudinaryKeys.apiKey,
  api_secret: cloudinaryKeys.apiSecret,
  secure: true
});

exports.myconfig = myconfig;
