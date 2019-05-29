const express = require('express');
const router = express.Router();
const keys = require('../../config/keys');
const passport = require('passport');

router.get('/test', (req, res) => res.json({msg: "sgroup works"}));
