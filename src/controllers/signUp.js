import User from "../models/user.js";
import owasp  from  'owasp-password-strength-test' ;
import bcrypt from "bcryptjs";
import { sendEmailVerication } from "./sendEmail.js";
import crypto from "crypto" ;

function generateSecurePin(){
  return crypto.randomInt(100000, 1000000);
}

export const signUp = async (req, res) => {
try {
  const { firstName, lastName, emailID, password, role } = req.body;

  // Check if user already exists
  const existingUser = await User.findOne({ emailID });
  if (existingUser) {
    return res.status(400).json({ error: "User already exists with this email." });
  }

  if(!firstName || !lastName || !emailID || !password || !role){
    return res.status(400).json({error : "Some fields are absent...."}) ;
  }

  owasp.config({
    allowPassphrases : true ,
    maxLength : 120 ,
    minLength : 10 ,
    minPhraseLength :20 ,
    minOptionalTestsToPass : 4 ,
  }) ;

  const result = owasp.test(password) ;

  if(!result){
    return res.send(400).json({error : "Password must be strong..."}) ;
  }

  // Create new user
  const useHashPassword = await bcrypt.hash(password  , 10) ;
  const user = new User({
    firstName,
    lastName,
    emailID,
    password : useHashPassword,
    role
  });
  
  const verificationCode =  generateSecurePin() ; // generate verification code

  const data = {
     to : emailID ,
     subject : "verification"  ,
     body : "Your  Verification code is this.. " + verificationCode , 
  } ;

  const emailVerification =  sendEmailVerication(data); 

  // if()
    //  await user.save();

  // Generate JWT token
  const token = await user.userToken();

  res.status(201).json({
    message: "User registered successfully.",
    user: {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      emailID: user.emailID,
      role: user.role ,
      password : user.password 
    },
    token
  });
} catch (err) {
  res.status(500).json({ error: err.message });
}

}