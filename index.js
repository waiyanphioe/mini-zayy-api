require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const userRouter = require("./routers/user");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI);

app.listen(PORT, () => {});
