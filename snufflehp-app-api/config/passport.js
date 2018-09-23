const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('../models/UserModel')
const passportJWT = require("passport-jwt");
const bcrypt   = require('bcrypt-nodejs');
const key = require('./key')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use('local-signin',new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
  },
  
  function(email, password, done) {

    //console.log('in passport email',email,password)

    UserModel.findOne({ where:{ email } }).then((user)=>{
      //console.log('in passport user',user.dataValues())

      if(user === null){
        //console.log('error Incorrect username')
        return done(null, false, { message: 'Incorrect username.' });
      }

      if(!bcrypt.compareSync(password, user.dataValues.password)){
        return done(null, false, { message: 'Incorrect password.' });
      }

      //console.log('user',user.dataValues)

      return done(null, user.dataValues);

    }).catch((err)=>{
      console.log('err',err)
      return done(err);
    })

  }
));

passport.use('local-signup',new LocalStrategy(
  {
    passReqToCallback: true,
    session: false
  },
  function(req,user_ref, password_ref, done) {
    //--
    var { username,password,email } = req.body

    try {

      if(username === ''){
        throw 'username is require'
      }

      if(password === ''){
        throw 'password is require'
      }

      if(email === ''){
        throw 'email is require'
      }

      
      UserModel.findOne({ 
        where:{
          [Op.or]: [{email}, {username}]
        } 
      }).then((refUser)=>{
        
        const user = refUser;
        //const hashPass = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    
        if(user !== null){

          if(email === user.email){

            throw {message:'Email is in use'}
            //return done(null, false, { message: "Email is in use" });
          }else if(username === user.username){

            throw {message:'Username is in use'}
            //return done(null, false, { message: "Username is in use" });
          }

        }


        //console.log('user null ,created')
        return done(null, { username,password,email })
    
      }).catch((err)=>{
        //console.log('1----err',err.message)
        //return done(null, false, { message: err });
        //throw err.message
        return done(null, false, { message: err.message });
      })

      
    } catch (error) {
      //console.log('2----error',error)
      return done(null, false, { message: error });
    }


  }
));

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey   : key
  },
  function (jwtPayload, cb) {

    //console.log('jwtPayload',jwtPayload)
    // if(){

    // }
    return cb(null, jwtPayload);
  }
));

