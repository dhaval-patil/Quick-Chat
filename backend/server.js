import express from "express";
import chats from "./data/data.js";
import dotenv from "dotenv";
import cors from "cors";
const app = express();

dotenv.config();
app.use(cors());

app.get("/", (req, res) => {
  res.send("api is running");
});

app.get("/api/chats", (req, res) => {
  res.json(chats);
});

app.get("/api/chat/:id", (req, res) => {
  console.log(req.params.id);
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

const PORT = process.env.PORT || 6000;
app.listen(PORT, console.log(`Server Started on PORT ${PORT}`));
