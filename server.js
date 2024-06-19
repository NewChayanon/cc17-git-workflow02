require('dotenv').config();
const express = require('express')
const notFound = require('./middlewares/not-found')

const app = express()


app.use(notFound)

const port = 8000
app.listen(8000,()=>console.log("Server on",port))