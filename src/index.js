const express = require('express');
const {PORT} = require('./config/serverConfig');
const bodyParser = require('body-parser');
const ApiRoutes = require('./routes/index');

const setupAndStartserver = async ()=>{

    const app = express();
    app.use(bodyParser.urlencoded({ extended : true}));
    app.use(bodyParser.json());
    app.use('/api',ApiRoutes);

    app.listen(PORT , ()=>{
        console.log(`server started at ${PORT}`);
    });

}
setupAndStartserver();