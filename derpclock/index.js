const express = require('express')
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('/main.js')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
