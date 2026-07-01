// Import Express framework
const express = require("express");

// Create Express application
const app = express();

// Application Port
const PORT = 3000;

// Home Route
app.get("/", (req, res) => {
    res.send("<h1>Welcome to NodeJS Class</h1>");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});