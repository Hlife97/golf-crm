const mongoose = require('mongoose');

mongoose.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try{
        mongoose.connect(process.env.DB, connectionParams);
        console.log('Connected To Database Successfully!')
    }catch(err){
        console.log(err);
        console.log('Could Not Connected To Database.')
    }
}