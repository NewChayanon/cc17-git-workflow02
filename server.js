require("dotenv").config();
const express = require("express");
const errorMiddleware = require("./middlewares/error");
const notFound = require("./middlewares/not-found");
const authRouter = require("./routes/auth-route");

const app = express();

app.use("/auth", authRouter);

app.use(notFound);
app.use(errorMiddleware);

const port = 8000;
app.listen(8000, () => console.log("Server on", port));
