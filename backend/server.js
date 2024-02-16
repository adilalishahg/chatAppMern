import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json()); // for parsing application/json
app.use(cookieParser()); // for parsing application/json
app.get("/", (req, res) => {});
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", usersRoutes);
app.listen(PORT, () => {
  connectToMongoDB();
  console.log("Server started on http://localhost:" + PORT);
});
