const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Maker = require("../models/Maker");

//load validation
const validateMakerInput = require("../validation/maker");
const validateProjectInput = require("../validation/project");

router.get("/all", (req, res) => {
  const errors = {};

  Maker.find()
    .populate("maker")
    .then(makers => {
      if (!makers.length) {
        errors.nomaker = "There are no makers";
        return res.status(404).json(errors);
      }

      res.json(makers);
    })
    .catch(err => res.status(404).json({ maker: "There are no makers" }));
});

//create maker profile
//TODO: Add logged in validation

router.post("/", (req, res) => {
  const { errors, isValid } = validateMakerInput(req.body);

  //check validation
  if (!isValid) {
    //return any errors with 400 status
    return res.status(400).json(errors);
  }

  //get fields
  const makerFields = {};
  if (req.body.name) makerFields.name = req.body.name;
  if (req.body.url) makerFields.url = req.body.url;
  if (req.body.twitter) makerFields.twitter = req.body.twitter;
  if (req.body.image) makerFields.image = req.body.image;

  //check if handle exists
  Maker.findOne({ twitter: makerFields.twitter }).then(maker => {
    if (maker) {
      errors.handle = "That handle already exists";
      res.status(400).json(errors);
    }

    //save maker
    new Maker(makerFields).save().then(maker => res.json(maker));
  });
});

//add maker project
//TODO: Add logged in validation

router.post("/project", (req, res) => {
  const { errors, isValid } = validateProjectInput(req.body);

  //check validation
  if (!isValid) {
    //return any errors with 400 status
    return res.status(400).json(errors);
  }

  Maker.findOne({ user: req.body.id }).then(maker => {
    const newProject = {};

    if (req.body.name) newProject.name = req.body.name;
    if (req.body.url) newProject.url = req.body.url;

    //add to exp array
    maker.projects.push(newProject);

    maker.save().then(maker => res.json(maker));
  });
});

module.exports = router;
