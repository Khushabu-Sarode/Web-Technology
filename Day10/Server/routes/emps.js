const mysql = require('mysql');
const config = require('config');
const express = require('express');

const app = express.Router();

const connectionDetails = config.get("connectionDetails")
const executeQuery = (queryText, request, response)=>{
    const connection =  mysql.createConnection(connectionDetails);
    connection.query(queryText,(error, result)=>{

    if(error == null)
    {
        response.send(result);     
    }
    else
    {
         response.send(error);     
    }

    connection.end();
   });
}

app.get("/",(request, response)=>{
   let queryText = `select * from Emp`;
   executeQuery(queryText, request, response);
});

app.post("/",(request, response)=>{
   let queryText = `insert into Emp(Name, Address) values('${request.body.Name}','${request.body.Address}')`;
   executeQuery(queryText, request, response);
});
app.put("/:No",(request, response)=>{
     let queryText = `update Emp set Name = '${request.body.Name}' , Address ='${request.body.Address}' where No = ${request.params.No}`;
     executeQuery(queryText, request, response);
});
app.delete("/:No",(request, response)=>{
     let queryText = `delete from Emp where No = ${request.params.No}`;
     executeQuery(queryText, request, response);
});

module.exports = app;