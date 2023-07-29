// importing express-ejs-layouts and express
const expressLayout = require("express-ejs-layouts");
const express = require("express");
const app = express();
require('./config/mongoose');

// port number
const port = process.env.PORT || 8000;

// parser added
app.use(express.urlencoded({ extended: true }));

app.use(express.static("assets"));

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(expressLayout);

app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

app.use("/", require("./routes"));

app.listen(port, (err) => {
  if (err) {
    console.error("Error:", err);
  }
  console.log(`Server started on port: ${port}`);
});
