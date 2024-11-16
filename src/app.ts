import express from 'express';
import connectDB from './config/database';
import bodyParser from 'body-parser';


//routes
import authRoutes from "./routes/auth"

import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = 8080;

connectDB();

app.use(bodyParser.json());

app.use("/auth", authRoutes);

app.listen(port, () => {
  return console.log(`🚀 Express is listening at http://localhost:${port}`);
});
