const app = require('./app');

const PORT = 7000;

app.listen(PORT, (err) => {
  if (err) {
    console.log('server connection failed', err);
  }
  console.log(`Page running at port ${PORT}`);
});
