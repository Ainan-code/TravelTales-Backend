const asyncHandler = require("express-async-handler");

const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');


const { json } = require("express");

const passport = require('passport');
const LocalStrategy = require("passport-local").Strategy;
const Users = require('../models/Users'); 



exports.user_homepage = asyncHandler(async (req, res, next) => {

       

    res.status(200).json('Hello world')
  });
  

  exports.user_register_get = asyncHandler(async (req, res, next) => {

       

    res.status(200).json('Register page')
  });



  exports.user_register_post = asyncHandler(async (req, res, next) => {

       

    res.status(200).json('Create user')
  });









