const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

async function connectDatabase() {

    const result = await mongoose.connect(`mongodb+srv://irshad:12345@cluster0.zkhcgoa.mongodb.net/?retryWrites=true&w=majority`);
    console.log(" connected")
    return result;
  }
  
  

module.exports = connectDatabase;