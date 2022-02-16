const mongoose = require('mongoose')

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("Database connected successfully");
})
.catch((e)=>{
    console.log("Error" + e);
})