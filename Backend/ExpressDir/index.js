const express = require("express");
const path = require("path");
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

// Root route
app.get("/", (req, res) => {
    res.send("You contacted root path");
});

// Specific routes
app.get("/apple", (req, res) => {
    res.send("You contacted apple path");
});

app.get("/banana", (req, res) => {
    res.send("You contacted orange path");
});

// ✅ Corrected catch-all route for Express 5.x
// app.get("/(*)", (req, res) => {
//     res.send("This path does not exist");
// });

// POST route
app.post("/", (req, res) => {
    res.send("You sent a POST request to root");
});

// Example of using app.use for all unmatched routes (optional)
// app.use((req, res) => {
//     console.log("Request received successfully");
//     let code = "<h1>Fruit</h1> <ul><li>Apple</li><li>Orange</li><li>Banana</li></ul>";
//     res.send(code);
// });