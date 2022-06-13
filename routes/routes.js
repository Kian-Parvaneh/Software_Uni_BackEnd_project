const express = require('express');
const bodyParser = require('body-parser');
const createUser = require('../MiddleWares/CreateUser');
const router = express.Router();
router.use(bodyParser.urlencoded({extended : false}));
router.use(bodyParser.json());

router.post('/CreateUser',(req,res)=>{
    createUser(req,res);
});

module.exports = router;