const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const MakerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String
  },
  twitter: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  projects: [
    {
      projectName: {
        type: String,
        required: true
      },
      projectUrl: {
        type: String
      },
      projectCategory: {
        type: String
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Maker = mongoose.model("makers", MakerSchema, "makers");
