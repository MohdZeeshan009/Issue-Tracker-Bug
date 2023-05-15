require('dotenv').config();
//require the library
const mongoose = require('mongoose');

// here we are using the MongoDB Url we defined in our ENV file

//connect to the database
// const connectDb = async () => {
//   try {
//     const connect = await mongoose.connect(process.env.CONNECTION_STRING);
//     console.log(
//       `connection successful `,
//       connect.connection.host,
//       connect.connection.name
//     );
//   } catch (err) {
//     console.log(`error connecting to database`, err);
//     process.exit(1);
//   }
// };



const url = 'mongodb://0.0.0.0:27017/connectDb';
mongoose.connect(url);
const connectDb=mongoose.connection;

//If any Error then Getting this Line
connectDb.on('error',console.error.bind(console,"Error connecting to MongoDB"));   


connectDb.once('open',()=>{
    console.log("Connected to Database :: MongoDB ")
});

module.exports = connectDb;
