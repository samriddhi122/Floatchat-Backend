const express = require("express");
const educationalRouter = express.Router() ;

educationalRouter.get("/query/explain" , async (req ,res) => { 
  try{
      
  }   
  catch(err){
    console.log(err.message) ;
  }
}) ;

module.exports = educationalRouter ;