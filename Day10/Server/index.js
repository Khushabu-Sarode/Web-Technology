const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
const config = require('config');
const jwt = require('jsonwebtoken');

const empRoutesDetails = require('./routes/emps')
const adminRoutesDetails = require('./routes/admin')
const customerRoutesDetails = require('./routes/customers') 
const authRoutes = require('./routes/auth')

const app = express();
app.use(cors());
app.use(express.json());

app.use((request, response, next)=>{

   if(request.url.includes('login')){
    next();
   }
   else
   {
        if(request.headers.authorization!=undefined)
        {
        let authheadercontent  = request.headers.authorization;
        // let authheadercontent  = "bearer <TOKEN>" 
        let authheadercontentAfterSplit =  
                authheadercontent.split(' ');
        let tokenReceived = authheadercontentAfterSplit[1];

        let secret = config.get("jwt.secretKey");
        var tokenDecrypted = jwt.verify(tokenReceived,secret )

        //tokenDecrypted.isValidUserLoggedIn was added by us in 
        //auth.js inside POST - LOGIN when token was originally created
        let isUserTokenValid = tokenDecrypted.isValidUserLoggedIn;

        if(isUserTokenValid)
        {
            next();
        }
        else
        {
            response.send({"message" : "token is invalid. pls login"})
        }
    }
    else
    {
         response.send({"message" : "auth token not found. pls login"})
    }
   }

});
app.use("/login", authRoutes)
app.use('/emps', empRoutesDetails);
app.use('/admin', adminRoutesDetails);
app.use('/customers', customerRoutesDetails);

const port = config.get("applicationPort");
app.listen(port, ()=>{console.log("Server Started..")})
