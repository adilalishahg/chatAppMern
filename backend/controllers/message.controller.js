import mongoose from "mongoose";
import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { userId: recieverId } = req.params;
    console.log(recieverId);
    const senderId = req.user._id;
    console.log(senderId);
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, recieverId] },
    });

    if (!conversation) {
      console.log("convewration not found");
      conversation = await Conversation.create({
        participants: [senderId, recieverId],
        messages: [],
      });
    }
    const newMessage = new Message({
      sender: senderId, // Set the sender field explicitly
      receiver: recieverId,
      message,
    });
    if (newMessage) {
      // Save the message ID to the conversation
      conversation.messages.push(newMessage._id);
    }
    await conversation.save();
    await newMessage.save();
    console.log(newMessage);
    res.status(201).json(newMessage);
  } catch (error) {
    console.log(`Error in sendMessage controller ${error.message}`);
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
};
