import { mongoose } from "mongoose"; 

export const connectDB = async () => {
   try{
    await mongoose.connect(process.env.DB_CONNECTION_SECRET) ;
   }
   catch(err){
    console.log("error in connecting to the database", err);
   }
}