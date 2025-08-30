const express = require('express');
const { dbConnection } = require('./dbConnection');
const app = express();

// middleware
app.use(express.json());


app.get('/studentRead',async(req,res)=> {
    const myDB = await dbConnection();
    const studentCollection = myDB.collection("students");
    const data =await studentCollection.find().toArray();
    res.send(data);
})

app.post('/studentInsert',async(req,res)=> {
    const myDB = await dbConnection();
    const studentCollection = myDB.collection("students");
    const {studentName,studentEmail} = req.body;
    const obj = {studentName,studentEmail};
    const insertRes = await studentCollection.insertOne(obj);
    res.send(insertRes);
})




// my app listening
app.listen(3000,()=> {
    console.log("My server is running");
})