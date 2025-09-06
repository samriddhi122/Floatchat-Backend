const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 500,
  message: 'Too many requests from this IP, please try again later.'
});

app.get("/test" , (req, res)=>{
   res.send("backend working ...") ;
})

app.listen(process.env.PORT ,() => {
    console.log("server running perfectly fine..");
})
