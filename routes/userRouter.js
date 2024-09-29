const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const {authenticateToken}  = require('../middleware/verifyToken');




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

 router.get('/profile', authenticateToken ,  userController.getsingleUser);
  


 // update a user

 router.put('/:id', authenticateToken , userController.updateUser);
  


 // delete a user 

 router.delete('/:id',authenticateToken, userController.deleteUser)

 // test the auth middleware

 


 

 
 
 

   module.exports = router;