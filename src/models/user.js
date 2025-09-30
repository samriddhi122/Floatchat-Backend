import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";


const userSchema =  mongoose.Schema({
   firstName : {
     type : String,
     required : true, 
     trim : true ,
     validate : {
      validator(value){
        return validator.isAlpha(value);
      } ,
      message : "First name must contain only alphabetic characters" ,
     }
    } ,
    lastName : {
      type : String , 
      required : true ,
      trim : true ,
      validate : {
       validator(value){
         return validator.isAlpha(value);
       } ,
       message : "Last name must contain only alphabetic characters" ,
      }
    } ,
    emailID  : {
      type :  String , 
      required : true ,
      unique : true ,
      trim : true ,
      validate : {
         validator(value){
           return validator.isEmail(value);
         } ,
          message : "Invalid email address" ,
      }
    },
    password : {
      type : String , 
      required : true ,
      minlength : [16 , "Password must be at least 16 characters long"] ,
      validate : {
         validator(value){
           return validator.isStrongPassword(value);
         }, 
         message : "Password must be at least 16 characters long  eg : (@#SA/dbvjh/00).&**%__^/)  " 
      }
    } ,
    role :{
       type : String , 
       required : true ,
       enum : ["admin" , "Ocean Field" , "user" , "Others"] ,
       default : "Others" ,
       trim : true ,
        validate: {
          validator(value) {
            return ["admin", "Ocean Field", "Others"].includes(value);
          },
          message: "Role must be one of: admin, Ocean Field, Others"
        }
    } 
  }, {timestamps : true}) ;


userSchema.methods.userToken  = async function() {
  const user = this ;
  const token = await jwt.sign({_id : user._id} , process.env.JWT_SECRET_KEY , {expiresIn : '7d'}) ;
  return token  ;
}


userSchema.methods.validatePassword = async function(userPassword){
  const user = this  ;
  const userHashPassword = user.password ;
  const validate = await bcrypt.compare(userPassword , userHashPassword) ;
  return validate ;
}

const User = mongoose.model("User" , userSchema);

export default User;

