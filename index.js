const express = require('express');
const { dbConnection } = require('./dbConnection');
const { ObjectId } = require('mongodb');
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

app.delete('/studentDelete/:id',async(req,res)=> {
    const {id} = req.params;
    const myDB = await dbConnection();
    const studentCollection = myDB.collection('students');
    const delRes = await studentCollection.deleteOne({_id: new ObjectId(id)});
    res.send(delRes);
})

app.put("/studentUpdate/:id",async(req,res)=> {
    const {id} = req.params;
    const {studentName,studentEmail} = req.body;
    const obj = {studentName,studentEmail};
    const myDB = await dbConnection();
    const studentCollection = myDB.collection('students');
    const updateRes = await studentCollection.updateOne({_id: new ObjectId(id)},{$set:{studentName,studentEmail}});
    res.send(updateRes);
})




// my app listening
app.listen(3000,()=> {
    console.log("My server is running");
})