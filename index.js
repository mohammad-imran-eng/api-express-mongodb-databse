const express = require('express');
const app = express();

// middleware
app.use(express.json());


app.get('/studentRead',(req,res)=> {
    res.send("Student read API");
})

app.post('/studentInsert',(req,res)=> {
    res.send("Student insert API");
})




// my app listening
app.listen(3000,()=> {
    console.log("My server is running");
})