require('dotenv').config();

const { API_KEY } = process.env;
const { API_SECRET } = process.env;
const { GOOGLE_CLIENT_ID } = process.env;
const { GOOGLE_CLIENT_SECRET } = process.env;

module.exports = {
  google: {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET
  },
  session: {
    cookieKey: 'imjustabillsittinoncapitalhill'
  },
  cloudinaryKeys: {
    apiKey: API_KEY,
    apiSecret: API_SECRET
  }
};
