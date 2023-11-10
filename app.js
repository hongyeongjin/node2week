const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('율무야 안녕!');
});

app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});