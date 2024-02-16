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
    //  instead to run one by one we call promise.all
    // await conversation.save();
    // await newMessage.save();

    //run in parallel
    await Promise.all(conversation.save(), newMessage.save());
    console.log(newMessage);
    res.status(201).json(newMessage);
  } catch (error) {
    console.log(`Error in sendMessage controller ${error.message}`);
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");
    if (!conversation)
      return res.status(404).json({ error: "Conversation not found" });

    res.status(200).json(conversation.messages);
  } catch (error) {
    console.log(`Error in getMessages controller ${error.message}`);
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
};
