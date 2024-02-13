import mongoose from "mongoose";
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_BD_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error conecting to DB", error.message);
  }
};

export default connectToMongoDB;
