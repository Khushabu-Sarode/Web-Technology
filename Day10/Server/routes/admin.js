const express = require('express');
const app = express.Router();

app.get("/", (request, response)=>{ response.send("GET Admin")});
app.post("/", (request, response)=>{response.send("POST Admin")});
app.put("/", (request, response)=>{response.send("PUT Admin")});
app.delete("/", (request, response)=>{response.send("DELETE Admin")});

module.exports = app;