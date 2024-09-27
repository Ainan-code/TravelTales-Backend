const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const {verifyToken}  = require("../middleware/verifyToken");




 // Routes for users //

 // create a new user  endpoints// 

 router.get('/register');

 router.post('/register', userController.createUser);


 // user login endpoints 


router.get('/login');

 router.post('/login', userController.loginUser); 
 
 // get all users 

 router.get('/', userController.getAllUsers);
 


 // get a single user //

 router.get('/:id', verifyToken ,  userController.getsingleUser);
  


 // update a user

 router.put('/:id', verifyToken , userController.updateUser);
  


 // delete a user 

 router.delete('/:id',verifyToken, userController.deleteUser)

 // test the auth middleware

 


 

 
 
 

   module.exports = router;