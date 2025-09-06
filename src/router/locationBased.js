const express = require("express");
const locationRouter = express.Router() ;

locationRouter.get("/query/:location" , async (req ,res) => { 
  try{
     
  } 
  catch(err){
    console.log(err.message) ;
  }
}) ;

module.exports = locationRouter ;