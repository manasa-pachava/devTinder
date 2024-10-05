const mongoose = require('mongoose');

const connectDB = async () =>{
    await mongoose.connect(
        "mongodb+srv://root:root@sample.6figm.mongodb.net/devTinder"
    );

}

module.exports = connectDB;

