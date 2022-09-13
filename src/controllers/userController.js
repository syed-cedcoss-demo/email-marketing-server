import UserModel from "../models/userModel.js";

export const getUser = (req, res) => {
  console.log("Hello");
  res.status(200).send("get the request");
};

//create new user

export const addUser = async (req, res) => {
  try {
    const payload = req.body;
    const create = await UserModel.create(payload);
    res.status(200).send(create);
  } catch (error) {
    console.log("error", error);
    res.status(500).send("Internal server error");
  }
};
