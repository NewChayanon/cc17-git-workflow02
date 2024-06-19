const express = require("express");
const errorMiddleware = require("./middlewares/error");

const app = express();

app.use(errorMiddleware);
const port = 8000;
app.listen(8000, () => console.log("Server on", port));
