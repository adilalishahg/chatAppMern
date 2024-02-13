import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
  {
    particiants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        default: [],
      },
    ],
  }, //createdAt , UpdatedAt
  { timestamps: true }
);
const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;