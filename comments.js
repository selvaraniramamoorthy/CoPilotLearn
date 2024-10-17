// Create web server
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Create a route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Run the server
// node comment.js
// Open http://localhost:3000 in your browser
// You should see "Hello World" in your browser. 
// You can change the port number by setting the PORT environment variable.

// 3. Install Express