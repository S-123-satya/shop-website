const path=require('path')
const express=require('express')
exports.getContactUsControllers=(req,res,next)=>{
    res.render(path.join(__dirname, '..','views','contactUs.ejs'));
}
