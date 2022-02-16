const express = require('express')
const app = express()
const dotenv = require("dotenv")
dotenv.config()
require('./db/config')

app.use(express.json())

const PORT = process.env.PORT || 9000

app.listen(()=>{
    console.log(`Server running at ${PORT}`);
})
