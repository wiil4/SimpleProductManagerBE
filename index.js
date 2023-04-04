const express = require('express');
const {DBconnection} = require('./config/db');
//Server Created
const app = express();
const port = 4000;

DBconnection().then(()=>{
    app.listen(port, ()=>{
        console.log('Server is runnning correctly');
    });
}).catch(err=>{
    console.error(err);
});

//Define principal route
app.get('/',(req,res)=>{
    res.send('<h1>Hello World</h1>');
});

/*app.listen(port,()=>{
    console.log(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
    console.log(process.env.DB_HOST);
});*/

