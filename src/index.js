const express = require("express");
const {PORT} = require('./config/serverConfig.js');

const setupAndStartserver = async ()=>{

    const app = express();

    app.listen(PORT , ()=>{
        console.log(`server started at ${PORT}`);    
    });

}
setupAndStartserver();