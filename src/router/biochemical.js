const express = require("express");
const biogeochemicalRouter = express.Router() ;

biogeochemicalRouter.get("/query/biogeochemical" , async (req ,res) => { 
  try{
      
  }   
  catch(err){
    console.log(err.message) ;
  }
}) ;

module.exports = biogeochemicalRouter ;