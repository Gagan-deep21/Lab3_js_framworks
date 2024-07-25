// Import necessary modules
const express = require('express');
const fs = require('fs');         // fs module to read files.
const path = require('path');    ///path to get the required directories

// Create an instance of an Express application
const app = express();

// Define a port number
const PORT = 3000;

// Define a route to read and display JSON data
app.get('/data', (req, res) => {
  // Read the JSON file
  fs.readFile(path.join(__dirname, 'data', 'Student.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Something went wrong while reading the data');
      return;
    }
    // Parse the JSON data and send it as a response
    res.json(JSON.parse(data));
  });
});

// Start the server and listen on the port 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

