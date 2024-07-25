// Import necessary modules
const express = require('express');
const fs = require('fs');
const path = require('path');

// Create an instance of an Express application
const app = express();

// Define a port number
const PORT = 3000;

// We can chain the methods like this :-
app.route('/crud')
.get((req, res) => {
    res.send('Hello postman user, your get request is successful.');
})
.post((req, res) => {
    res.send('Hello postman user, your post request is successful.');
})
.put((req, res) => {
    res.send('Hello postman user, your put request is successful.');
})
.delete((req, res) => {
    res.send('Hello postman user, your delete request is successful.');
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});
