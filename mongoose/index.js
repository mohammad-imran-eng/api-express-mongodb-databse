const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT || 3000

mongoose.connect(process.env.DB_URL).then(()=> {
    console.log("connect to the Database");
    app.listen(PORT,()=> {
        console.log(`server is running on port ${PORT}`)
    })
})
