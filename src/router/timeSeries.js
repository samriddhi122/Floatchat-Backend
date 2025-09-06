const express = require("express");
const timeSeriesRouter = express.Router() ;

timeSeriesRouter.get("/query/time" , async (req ,res) => { 
  try{
     
  } 
  catch(err){
    console.log(err.message) ;
  }
}) ;

module.exports  = timeSeriesRouter ;