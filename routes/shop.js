const express = require('express');
const path=require('./../util/path');

const {shopControllers} =require('../controllers/adminControllers');
const router = express.Router();
const products=[];
router.get('/', shopControllers);

module.exports = router;
