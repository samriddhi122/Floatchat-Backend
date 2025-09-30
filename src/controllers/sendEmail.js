import nodemailer from 'nodemailer' ;

export const sendEmail =  async (req ,res) => {
    try{
      const  data = req.body ;
   
      const emailName = data.to ;
      const subject = data.subject ;
      const emailBody = data.body ;

      if(!emailName || !subject || !emailBody){
        throw new Error ("Recipient email address is missing or invalid") 
      }

      let transporter = nodemailer.createTransport({
        host : 'smtp.gmail.com',
        secue : true ,
        port : process.env.SEND_EMAIL_PORTNUMBER ,
        auth : {
          user: process.env.SEND_EMAIL_USERNAME,
          pass: process.env.SEND_EMAIL_PASSWORD
        }
       }) ;

       let info = await transporter.sendMail({
          from: process.env.SEND_EMAIL_USERNAME,
          to: emailName,
          subject: subject,
          text: emailBody
       })
       res.send("success..") ;
     } 
    catch(err){
        console.error(err);
      res.send(404).send("Not Possible") ;
    }
} ;


export const sendEmailVerication = async({data}) => {
  try{  
  console.log(data) ;
  const emailName = data.to ;
  const subject = data.subject ;
  const emailBody = data.body ;

  if(!emailName || !subject || !emailBody){
    throw new Error ("Recipient email address is missing or invalid") 
  }

  let transporter = nodemailer.createTransport({
    host : 'smtp.gmail.com',
    secue : true ,
    port : process.env.SEND_EMAIL_PORTNUMBER ,
    auth : {
      user: process.env.SEND_EMAIL_USERNAME,
      pass: process.env.SEND_EMAIL_PASSWORD
    }
   }) ;

   let info = await transporter.sendMail({
      from: process.env.SEND_EMAIL_USERNAME,
      to: emailName,
      subject: subject,
      text: emailBody
   })
   res.send("success..") ;
 } 
  catch(err){
    console.error(err);
    res.send(404).send("Not Possible") ;
  }
}