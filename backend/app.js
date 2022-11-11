const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/api');
const app = express();

// Middleware
app.use(express.json());
app.use("/contacts", router)

// DB Connection
mongoose.connect("mongodb+srv://admin:LdC8f7eW3TTsbq3E@cluster0.zoynkc4.mongodb.net/golf-crm?retryWrites=true&w=majority")
.then(()=>console.log('Connected To Database')).then(()=>{
    app.listen(5000)
}).catch((err)=>console.log(err));

// DB-pass: LdC8f7eW3TTsbq3E