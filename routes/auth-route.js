const express = require("express");

const authRouter = express.Router();

authRouter.post("/register", (req, res, next) => {
  res.json({ msg: "Register..." });
});
authRouter.post("/login", (req, res, next) => {
  res.status(200).json({ message: "login success" });
});

module.exports = authRouter;
