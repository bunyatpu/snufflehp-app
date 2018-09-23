
var express = require('express');
var authRoute = express.Router();
var authController = require('../controllers/authController')
var auth = require('../middleware/auth')


authRoute.use('/signup', auth.validateSignup,authController.addUser);
authRoute.use('/signin', auth.validateSignin,(req,res)=>{

  const { user,token } = req;

  res.json({status:true,user, token});
});

module.exports = authRoute;
