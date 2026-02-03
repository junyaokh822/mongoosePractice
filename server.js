import express from "express";
import dotenv from "dotenv";
import { logReq, globalErr } from "./middleware/middlewares.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(logReq);

app.use(globalErr);

app.listen(PORT, () => {
  console.log(`Server is running on PORT: http://localhost:${PORT}`);
});
