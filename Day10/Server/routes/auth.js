const express = require('express');
const config = require('config');
const jwt = require('jsonwebtoken');
const secret = config.get("jwt.secretKey")
const app = express.Router();


const validateCredentialWithDB=(username, password)=>{

    console.log(username);
    console.log(password);
    if(username == "mahesh" && password =="mahesh@123")
        {
            return true;
        } 
        else
        {
            return false;
        }
}
app.post("/", (request, response)=>
    {
        let username = request.body.username;
        let password = request.body.password;
        
        let isUserValid  = 
                validateCredentialWithDB(username, password);
        
        if(isUserValid)
        {
             const payloadForToken =  
             {
                loggedInUserName :username,
                isValidUserLoggedIn : true,
                tokenCreatedDateTime : new Date().toString()
             }

             let token =  jwt.sign(payloadForToken,secret)
             console.log("token generated is = " + token);

             response.send({"token": token})
        }
        else
        {
                response.send({"message": "invalid credentials"})
        }
       
    });

module.exports = app;