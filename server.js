const express = require('express')
const app = express()
// const bodyparser = require('body-parser')
const cors = require('cors')
const dotenv = require("dotenv")
dotenv.config()
require('./db/config')

app.use(express.json())

const userroutes = require('./routes/user');
const leadroutes = require('./routes/leads')
app.use(cors());

app.use(express.json())
app.get('/', (req, res) => {
    res.send('deepak')
})

app.use('/api', userroutes)
app.use('/api', leadroutes)

const PORT = process.env.PORT || 9000

app.listen(() => {
    console.log(`Server running at ${PORT}`);
})
