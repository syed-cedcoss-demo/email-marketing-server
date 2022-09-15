import UserModel from "../models/userModel.js";
import { sendSignupMail } from "../services/mail.service.js";

export const getUser = (req, res) => {
  console.log("Hello");
  res.status(200).send("get the request");
};

//create new user

export const addUser = async (req, res) => {
  try {
    const payload = req.body;
    const create = await UserModel.create(payload);
    sendSignupMail({
      to: payload?.email,
      subject: "welcome to email marketing app",
    });
    res.status(200).send(create);
  } catch (error) {
    console.log("error", error);
    res.status(500).send({ error: error });
  }
};
