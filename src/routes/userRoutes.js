import express from "express";
import { getUser, addUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/addUser", addUser);
router.get("/getUser", getUser);

export default router;
