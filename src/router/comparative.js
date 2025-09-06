const express = require("express");
const comparativeRouter = express.Router() ;

comparativeRouter.get("/query/:compare" , async (req ,res) => { 
  try{
      
  }   
  catch(err){
    console.log(err.message) ;
  }
}) ;

module.exports = comparativeRouter ;