const express = require("express");
const parameterRouter = express.Router() ;

parameterRouter.get("/query/:parameter" , async (req ,res) => { 
  try{

  }   
  catch(err){
    console.log(err.message) ;
  }
}) ;

module.exports = parameterRouter ;