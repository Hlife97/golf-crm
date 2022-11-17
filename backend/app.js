require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/api');
const cors = require('cors');
const app = express();
// const connection = require('./db');

// Middleware
app.use(express.json());
app.use(cors());
app.use("/users", router)
app.use("/contacts", router)

// const port = process.env.PORT || 5000;
// app.listen(port, () => console.log(`Listening on port ${port}...`))


// DB Connection
const mongoDB = "mongodb+srv://admin:LdC8f7eW3TTsbq3E@cluster0.zoynkc4.mongodb.net/golf-crm?retryWrites=true&w=majority";

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log('Connected To Database Successfully!')).then(()=>{
    app.listen(5000)
}).catch((err)=>console.log(err));

// DB-pass: LdC8f7eW3TTsbq3E