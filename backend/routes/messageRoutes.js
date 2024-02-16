import express from "express";
import { sendMessage, getMessages } from "../controllers/message.controller.js";
import { protectedRoute } from "../middleware/protectedRoute.js";

const router = express.Router();

router.post("/send/:userId", protectedRoute, sendMessage);
router.post("/:id", protectedRoute, getMessages);

export default router;
