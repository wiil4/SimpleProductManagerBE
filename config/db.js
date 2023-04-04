const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path: 'variables.env'});

const DBconnection = async () =>{
    try{
        await mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to DB');
    }
    catch(error){
        console.log(error);
        process.exit(1);    //Stopping the app
    }
};
module.exports = {DBconnection};