// import mongoose for connect db
const mongoose = require("mongoose");

const databaseURL =
  "mongodb+srv://abhavsar:5CCBR6dJHV8p423S@cluster0.op38amg.mongodb.net/csvmaster";
mongoose
  .connect(databaseURL)
  .then(() => {
    console.log("Connection successful!!");
  })
  .catch((err) => console.log("no connection " + err));

const db = mongoose.connection;

db.on('error', (error) => {
	console.log('error:', error);
});

db.once("open", () => {
  console.log("Database connected successfully");
});

module.exports = db;
