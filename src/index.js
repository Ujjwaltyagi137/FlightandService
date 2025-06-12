const express = require("express");
const {PORT} = require('./config/serverConfig.js');
const bodyParser = require('body-parser');



const setupAndStartserver = async ()=>{

    const app = express();
    app.use(bodyParser.urlencoded({ extended : true}));
    app.use(bodyParser.json());
    app.listen(PORT , ()=>{
        console.log(`server started at ${PORT}`);    
    });

}
setupAndStartserver();