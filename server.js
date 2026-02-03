import express from "express";
import dotenv from "dotenv";
import { logReq, globalErr } from "./middleware/middlewares.js";
import connectDB from "./db/conn.js";
import produceRoutes from "./routes/produceRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
connectDB();
//express setup
app.use(express.json());
app.use(logReq);
//routes
app.use("/api/produce", produceRoutes);
//global handling errors
app.use(globalErr);
//listener
app.listen(PORT, () => {
  console.log(`Server is running on PORT: http://localhost:${PORT}`);
});
