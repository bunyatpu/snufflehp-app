
var express = require('express');
var authRoute = express.Router();
var auth = require('../middleware/auth')
var userController = require('../controllers/userController')
var multer  = require('multer')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/avatars')
  },
  filename: function (req, file, cb) {
    //let { user } = req.body;
    let params = req.body;
    const { id } = params

    cb(null, 'avatar-'+ Date.now() +'-' + id +'.'+file.originalname.split(".").pop(-1))
  }
})

var upload = multer({ storage: storage })


authRoute.use('/load_user',auth.reqAuth, userController.loadUserById);
authRoute.use('/update_user', auth.reqAuth,upload.any(), userController.updateUser);
authRoute.use('/update_password', auth.reqAuth, userController.updatePassword);
authRoute.use('/update_address', auth.reqAuth, userController.updateAddress);



module.exports = authRoute;
