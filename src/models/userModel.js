import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "you need to provide email"],
      unique: [true, "your email id already exist"],
    },
    name: {
      required: [true, "you need to provide name"],
      type: String,
    },
    yearOld: {
      type: Number,
    },
    gender: {
      type: String,
    },
  },
  { timestamps: true }
);

const UserModel = model("User", userSchema);
export default UserModel;
