const express = require('express');
const connectDB = require('./db');  // ✅ Fix: No destructuring

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;
const url = process.env.db_url;

app.listen(port, async () => {
  try {
    await connectDB(url);  // ✅ Now it will work correctly
    console.log(`Server is running on port ${port}`);
  } catch (error) {
    console.error(error);
  }
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});
