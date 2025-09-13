import express from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
import cors from "cors";
import queryRoutes from "./src/routes/queryRoutes.js";
const app = express();
import { handleChat } from "./src/controllers/chatHandler.js";

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 500,                 
  message: "Too many requests from this IP, please try again later.",
});

app.use(limiter); 
// routes
app.use("/", queryRoutes);

app.post("/chat", handleChat);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
