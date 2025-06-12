const express = require("express");
const {PORT} = require('./config/serverConfig.js');
const bodyParser = require('body-parser');

const CityRepository = require('./repository/city-repository');

const setupAndStartserver = async ()=>{

    const app = express();
    app.use(bodyParser.urlencoded({ extended : true}));
    app.use(bodyParser.json());
    app.listen(PORT , ()=>{
        console.log(`server started at ${PORT}`); 
        const repo = new CityRepository();
        repo.createCity({name : "new_delhi"})
    });

}
setupAndStartserver();