const express = require('express');
const router = express.Router();
const keys = require('../../config/keys');
const passport = require('passport');

const Course = require('../models/Course');

router.get('/test', (req, res) => res.json({msg: "tanda works"}));


//Get courses

//Get course by ID

//Create course

//Update Course

//delete Course

//add student

//remove student 

//Add group

//Remove group


module.exports = router;
