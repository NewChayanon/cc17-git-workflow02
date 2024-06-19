const express = require("express");
const authRouter = express.Router();

authRouter.get("/getUser");
authRouter.post("/register", (req, res, next) => {
  res.json({ msg: "Register..." });
});
authRouter.post("/register", (req, res, next) => {
  res.json({ msg: "Register..." });
});
authRouter.post("/login", (req, res, next) => {
  res.status(200).json({ msg: "login success" });
});

module.exports = authRouter;
