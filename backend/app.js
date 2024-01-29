    const express = require('express')
const app=express();
const mongoose = require('mongoose')
const cors = require('cors')
const router=require('./routers/router')

app.use(express.json())
app.use(cors())
app.use('/',router);


url='mongodb+srv://hari:12345@cluster0.ilulkg7.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(url).then(()=>{
    console.log('db is connected')
}).catch(err=>console.log("error connecting the database"))

// mongoose.connect(url).then(()=>console.log("db is connected"));


// },
//     function (err, res) {
//         try {
//             console.log('Connected to Database');
//         } catch (err) {
//             throw err;
//         }




app.listen(3333,()=>{
    console.log('the server is running')
})