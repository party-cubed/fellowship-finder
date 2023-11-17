const { Router } = require('express');

const multer = require('multer');

const Upload = Router();

const { uploadToCloudinary } = require('../cloudinary_helpers.js');

const storage = multer.memoryStorage();
const upload = multer({ storage });
const myUploadMiddleware = upload.single('uploaded_file');

const runMiddleware = (req, res, callback) => {
  return new Promise((resolve, reject) => {
    callback(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

Upload.post('/', async (req, res) => {
  try {
    await runMiddleware(req, res, myUploadMiddleware);
    const b64 = Buffer.from(req.file.buffer).toString('base64');
    console.log(b64);
    const dataUri = `data:${req.file.mimetype};base64,${b64}`;
    const cldRes = await uploadToCloudinary(dataUri);
    res.json(cldRes);
  } catch (err) {
    console.error('upload error upload.js', err);
    res.status(500).send({
      message: err.message
    });
  }
});

module.exports = Upload;

