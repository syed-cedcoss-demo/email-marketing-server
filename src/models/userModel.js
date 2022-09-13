import { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
  },
  yearOld: {
    type: Number,
  },
  gender: {
    type: String,
  },
});

const UserModel = model("User", userSchema);
export default UserModel;
