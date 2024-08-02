const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/userController');



 // get the homepage
router.get('/', user_controller.user_homepage);


// get the register api
 router.get('/register', user_controller.user_register_get);

 // register the user 

 router.post('/register', user_controller.post);                           
 
 

   module.exports = router;