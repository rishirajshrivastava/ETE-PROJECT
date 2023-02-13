const mongoose = require("mongoose");

const connectToMongoose = async () => {
  try {
    const db = await mongoose.connect("mongodb+srv://princy:b0dYOMvswN05CK3o@cluster0.o2qtzu1.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to Mongoose Through ${db.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = {
  connectToMongoose,
};
