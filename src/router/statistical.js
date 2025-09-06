const express = require("express");
const statisticalRouter = express.Router() ;

statisticalRouter.get("/query/statistics" , async (req ,res) => { 
  try{
      
  }   
  catch(err){
    console.log(err.message) ;
  }
}) ;

module.exports = statisticalRouter ;