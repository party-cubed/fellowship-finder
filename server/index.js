
const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');
const app = require('./app');


app.use(express.json());
app.use(cors({ origin: true }));

app.post('/authenticate', async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      { username, secret: username, first_name: username },
      { headers: { 'private-key': '936bd962-1f79-4d82-bffb-e7239bbbc3c4' } }
    );
    return res.status(r.status).json(r.data);
  } catch (err) {
    return res.status(err.response.status).json(err.response.data);
  }
});


const PORT = 3001;

app.listen(PORT, (err) => {
  if (err) {
    console.error('server connection failed', err);
  }
  console.log(`Page running at: 127.0.0.1:${PORT}`);
});
