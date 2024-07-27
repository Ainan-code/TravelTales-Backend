const express = require('express');
const router = express.Router();



// -----------------------------Create a new TODO item-----------------------------
router.get('/', async (req, res) => {
    try {
     
      
     console.log('homepage');
      res.status(201).json("Hello");
    } catch (error) {
      console.error('Error creating TODO item:', error); // Log the error
    }
   });


   router.get('/register', async (req, res) => {
    try {
     
      
     console.log('Register page');
      res.status(201).json(" register here");
    } catch (error) {
      console.error('Error creating TODO item:', error); // Log the error
    }
   });

   router.post('/register', async (req, res) => {
    try {
     
      
     console.log('Register page');
      res.status(201).json(" register here");
    } catch (error) {
      console.error('Error creating TODO item:', error); // Log the error
    }
   });



   module.exports = router;