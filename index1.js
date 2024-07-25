// Import the Express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define a port number on which server will listen for incoming requests
const PORT = 3000;
// Define a simple route to handle GET requests to the root URL ('/')
app.get('/', (req, res) => {
  // Sending a response displaying group names
  res.send(`
    <h1> GROUP MEMBERS</h1>
    <ul>
      <li>GAGANDEEP </li>
      <li>NAVPREET KAUR</li>
      <li>CHANPREET</li>
    </ul>
  `);
});

// Start the server and listen on the port 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
