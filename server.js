import express from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

import queryRoutes from "./routes/queryRoutes.js";

dotenv.config();
const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 500,                 
  message: "Too many requests from this IP, please try again later.",
});

app.use(limiter); 

// routes
app.use("/query", queryRoutes);

app.get("/test", (req, res) => {
  res.send("backend working ...");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
