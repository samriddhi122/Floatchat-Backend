import { GoogleGenAI } from "@google/genai";


import { config as configDotenv } from "dotenv";
configDotenv();

import { systemPrompt } from "../utils/systemPrompt";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});


export const handleChat = 
async (req, res)=>{
       try{
         
         const chatHistory = req.body.chatHistory; 
         if(!chatHistory)
            return res.send("Nothing is there"); 

         console.log(systemPrompt); 

         const response = await ai.models.generateContent({
            model: "gemini-2.0-flash", 
             contents:[
                {
                    role:"user", 
                    parts:[{text: systemPrompt}]
                }, 
                ...chatHistory
             ]
         }); 

         const responseText = response.candidates[0].content.parts[0].text; 

         chatHistory.push({
            role:"model", 
            parts:[{text: responseText, type: "text"}],
         }); 

         return res.json({chatHistory}); 

       }
       catch(err)
       {
          console.log(err); 
          res.status(500).json({error: err.message});
       }
};