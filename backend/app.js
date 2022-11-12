const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/api');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/contacts", router)

// DB Connection
const mongoDB = "mongodb+srv://admin:LdC8f7eW3TTsbq3E@cluster0.zoynkc4.mongodb.net/golf-crm?retryWrites=true&w=majority";

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log('Connected To Database')).then(()=>{
    app.listen(5000)
}).catch((err)=>console.log(err));

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// DB-pass: LdC8f7eW3TTsbq3E