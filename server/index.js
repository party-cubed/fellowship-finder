const app = require('./app');

const PORT = 7000;
const PUBLIC_IP = '18.217.208.71';

app.listen(PORT, PUBLIC_IP, (err) => {
  if (err) {
    console.log('server connection failed', err);
  }
  console.log(`Page running at: ${PUBLIC_IP}:${PORT}`);
});
