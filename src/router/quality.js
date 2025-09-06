const express = require("express");
const qualityRouter = express.Router() ;

qualityRouter.get("/query/quality-control" , async (req ,res) => { 
  try{
      
  }   
  catch(err){
    console.log(err.message) ;
  }
}) ;

module.exports = qualityRouter ;