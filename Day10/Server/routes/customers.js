const express = require('express');
const app = express.Router();

app.get("/", (request, response)=>{ response.send("GET customers")});
app.post("/", (request, response)=>{response.send("POST customers")});
app.put("/", (request, response)=>{response.send("PUT customers")});
app.delete("/", (request, response)=>{response.send("DELETE customers")});

module.exports = app;