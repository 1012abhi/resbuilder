const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI
// const options = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverSelectionTimeoutMS: 5000, 
//   socketTimeoutMS: 45000, 
// };

mongoose.connect(uri)
  .then(() => {
    console.log("Database connection established successfully");
  })
  .catch((err) => {
    // console.log(err);
    
    console.error("Database connection error:", err);
  });