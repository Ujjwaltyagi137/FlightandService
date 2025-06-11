const express = require("express");
const {PORT} = require('./config/serverConfig.js');
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended : true}));
app.use(bodyparser.json());

const setupAndStartserver = async ()=>{

    const app = express();

    app.listen(PORT , ()=>{
        console.log(`server started at ${PORT}`);    
    });

}
setupAndStartserver();