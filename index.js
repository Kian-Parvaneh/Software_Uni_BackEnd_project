const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes/routes.js');
const sequelize = require('./DataBase/Sequelize');
const app = express();

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use('/api',routes)

sequelize.sync()
    .then(()=>{
        app.listen(6100,()=>{
            console.log('start!');
        });
    }).catch(err=>{console.log(err);})
