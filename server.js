const express = require('express')

const app = express()

const port = 8000
app.listen(8000,()=>console.log("Server on",port))