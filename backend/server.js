import dotenv from "dotenv";
dotenv.config();
import express from "express";

import authRoutes from "./routes/authRoutes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // for parsing application/json
app.get("/", (req, res) => {});
app.use("/api/auth", authRoutes);
app.listen(PORT, () => {
  connectToMongoDB();
  console.log("Server started on http://localhost:" + PORT);
});
