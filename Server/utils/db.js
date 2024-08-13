const mongoose= require('mongoose');
// const env = require('')
// const URI = "mongodb://127.0.0.1:27017/mern_stack"
const URI = process.env.MoNGODB_URI;
//mongoose.connect(URL)
const connectDb =async ()=>{
    try {
   await mongoose.connect(URI);

   console.log("connected successfull DB");
} catch (error) {
    console.log("db failed");
    process.exit(0);
    }
};
module.exports = connectDb;
// 