const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Twitter = require('twitter')
const cloudinary = require('cloudinary')
require('dotenv').config()
const Maker = require('../models/Maker')

//load validation
const validateMakerInput = require('../validation/maker')
const validateProjectInput = require('../validation/project')

router.get('/all', (req, res) => {
  const errors = {}

  Maker.find()
    .populate('maker')
    .then(makers => {
      if (!makers.length) {
        errors.nomaker = 'There are no makers'
        return res.status(404).json(errors)
      }

      res.json(makers)
    })
    .catch(err => res.status(404).json({ maker: 'There are no makers' }))
})

//create maker profile
//TODO: Add logged in validation
//TODO: Add some error catching

router.post('/', (req, res) => {
  const { errors, isValid } = validateMakerInput(req.body)

  //check validation
  if (!isValid) {
    //return any errors with 400 status
    return res.status(400).json(errors)
  }

  //twitter config
  const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  })

  //pull info from twitter
  const handle = req.body.twitter
  const params = { screen_name: handle }
  client.get('users/show', params, (error, response) => {
    if (!error) {
      const profileImage = response.profile_image_url_https.replace(
        /_normal/g,
        ''
      )

      //save image
      cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API,
        api_secret: process.env.CLOUDINARY_SECRET,
      })

      cloudinary.v2.uploader.upload(
        profileImage,
        { upload_preset: 'indiemakerlist' },
        (error, result) => {
          //save variables
          const fields = {}
          fields.name = req.body.name
          fields.twitter = handle
          fields.image = result.eager[0].secure_url
          fields.largeImage = result.secure_url
          fields.followers = response.followers_count
          if (req.body.url) fields.url = req.body.url

          //save to database
          //check if handle exists
          Maker.findOne({ twitter: handle }).then(maker => {
            if (maker) {
              errors.handle = 'That handle already exists'
              res.status(400).json(errors)
            }

            //save maker
            new Maker(fields).save().then(maker => res.json(maker))
          })
        }
      )
    } else {
      console.log(error)
    }
  })
})

//add maker project
//TODO: Add logged in validation

router.post('/project', (req, res) => {
  const { errors, isValid } = validateProjectInput(req.body)

  //check validation
  if (!isValid) {
    //return any errors with 400 status
    return res.status(400).json(errors)
  }

  Maker.findOne({ _id: req.body.id }).then(maker => {
    const newProject = {}

    if (req.body.name) newProject.name = req.body.name
    if (req.body.url) newProject.url = req.body.url

    //add to exp array
    maker.projects.push(newProject)

    maker.save().then(maker => res.json(maker))
  })
})

//like maker
router.post('/like/:id', (req, res) => {
  console.log('hi')
  console.log('-----------------')
  console.log(req.body.user)
  Maker.findById(req.params.id).then(maker => {
    console.log('inside')
    if (
      maker.votes.filter(vote => vote.user.toString() === req.body.user)
        .length > 0
    ) {
      return res
        .status(400)
        .json({ alreadyliked: 'User already liked this post' })
    }

    //add user id to likes array
    maker.votes.unshift({ user: req.body.user })

    maker.save().then(maker => res.json(maker))
  })
})

module.exports = router
