const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Server started successfully');
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
