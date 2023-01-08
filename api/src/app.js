const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoute = require('./routes/productRoute');

const app = express();
app.use(cors());

mongoose
  .connect('mongodb://localhost/productstock-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB Connected Successfully');
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/products', productRoute);

const port = 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
