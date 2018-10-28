const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

//mongoose connect
mongoose
  .connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const app = express();

const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
