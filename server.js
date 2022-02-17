const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const cors = require('cors')
const dotenv = require("dotenv")
dotenv.config()
require('./db/config')

const userroutes = require('./routes/user');
const leadroutes = require('./routes/leads')
app.use(express.json())



// parse application/json
app.use(bodyparser.json())
app.use(express.urlencoded({ extended: false }))
// app.use(cors({
//     origin: ``,
//     credentials: true
// }))
app.use(cors());




app.get('/', (req, res) => {
    res.json({
        msg: 'Welcome Dev ',
        'blogs-api': 'hello'
    })
})
app.use('/api', userroutes)
app.use('/api', leadroutes)

const PORT = process.env.PORT || 9000

app.listen(() => {
    console.log(`Server running at ${PORT}`);
})
