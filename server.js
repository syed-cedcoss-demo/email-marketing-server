import express from "express";
import * as dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import userRoutes from "./src/routes/userRoutes.js";
const app = express();
dotenv.config();
connectDB();

app.use(express.json());
app.get("/", (req, res) => {
  res.send(`Server is up and running on port ${process.env.PORT}`);
});

app.use("/api/user", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is up and running on port ${process.env.PORT}`);
});
