const path=require('./../util/path');
const express = require('express');

const {getAdminController,postAdminController} =require('../controllers/adminControllers');
const router = express.Router();
const products=[];

// /admin/add-product => GET
router.get('/add-product',getAdminController );

// /admin/add-product => POST
router.post('/add-product', postAdminController);

exports.routes = router;

