const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const { protect } = require("../middleware/authMiddleware");




 // Routes for users //

 // create a new user  endpoints// 

 router.get('/register');

 router.post('/register', userController.createUser);


 // user login endpoints 


router.get('/login');

 router.post('/login',
  passport.authenticate('local'
 ), userController.loginUser); 
 
 // get all users 

 router.get('/', userController.getAllUsers);
 


 // get a single user //

 router.get('/:id', userController.getsingleUser);
  


 // update a user

 router.put('/:id',protect, userController.updateUser)
  


 // delete a user 

 router.delete('/:id',protect, userController.deleteUser)

 // test the auth middleware

 


 

 
 
 

   module.exports = router;