const { connect } = require("mongoose");

// Database Connection

const connectDB = async () => {
  await connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  console.log(`MongoDB Connected successfully!`);
};

module.exports = connectDB;
