import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("database connected successful");
    console.info("database host ::", connect?.connection?.host);
    console.info("database name ::", connect?.connection?.name);
  } catch (error) {
    console.log("error in database connect", error);
    process.exit(1);
  }
};

export default connectDB;
