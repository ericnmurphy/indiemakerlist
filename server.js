const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

require('dotenv').config()

//load routes
const makers = require('./routes/makers')

const app = express()
app.use(cookieParser())

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//map global promises
mongoose.Promise = global.Promise

//mongoose connect
mongoose
  .connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

//set cookie on default route
app.get('/api/cookie', (req, res) => {
  // read cookies
  // console.log(req.cookies.user)

  // if (!req.cookies.user) {
  // Set cookie
  let options = {
    maxAge: 1000 * 60 * 15, // would expire after 15 minutes
    httpOnly: false,
  }
  const randomNumber = Math.floor(Math.random() * 9999999999)
  res.cookie('user', randomNumber, options) // options is optional
  //   console.log('fuck')
  // }
  res.status(200).send('set cookie')
})

//use routes
app.use('/api/makers', makers)

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
