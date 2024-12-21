import express from 'express';
import connectDB from './config/database';
import bodyParser from 'body-parser';
import cors from "cors"


//routes
import authRoutes from "./routes/auth"
import collectionRoutes from "./routes/collection"
import artpieceRoutes from "./routes/artpiece"
import userRoutes from "./routes/user"

import dotenv from 'dotenv';
import { authMiddleware } from './middlewares/auth';
dotenv.config();
const app = express();
const port = 8080;

connectDB();


app.use(bodyParser.json());
app.use(cors());
app.use(authMiddleware);

// @ts-ignore
app.get("/protected", (req, res) => res.send({success: true, user: req?.user as any}) )


app.use("/auth", authRoutes);
app.use("/collection", collectionRoutes);
app.use("/artpiece", artpieceRoutes)
app.use("/user", userRoutes)


app.listen(port, () => {
  return console.log(`🚀 Express is listening at http://localhost:${port}`);
});
