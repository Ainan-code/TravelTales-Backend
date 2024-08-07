const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');



 // Routes for users //

 // create a new user // 

 router.post('/', userController.createUser);
      
 
 // get all users 

 router.get('/', userController.getAllUsers);
 


 // get a single user //

 router.get('/:id', userController.getsingleUser);
  


 // update a user

 router.put('/:id', userController.updateUser)
  


 // delete a user 

 router.delete('/:id', userController.deleteUser)


 

 
 
 

   module.exports = router;