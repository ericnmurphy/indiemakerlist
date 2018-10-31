const mongoose = require('mongoose')
const Schema = mongoose.Schema

//create schema
const MakerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
  },
  twitter: {
    type: String,
    required: true,
  },
  followers: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  largeImage: {
    type: String,
    required: true,
  },
  projects: [
    {
      name: {
        type: String,
        required: true,
      },
      url: {
        type: String,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = Maker = mongoose.model('makers', MakerSchema, 'makers')
