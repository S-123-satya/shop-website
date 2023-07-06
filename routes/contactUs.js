const express=require('express')
const {getContactUsControllers}=require('./../controllers/contactUsControllers')
const router=express.Router()

exports.contact = router.get('/contactUs',getContactUsControllers)
