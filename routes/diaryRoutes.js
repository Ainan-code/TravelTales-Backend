const express = require('express');
const router = express.Router();

const diaryController = require('../controllers/dairyController');
const {authenticateToken}  = require('../middleware/verifyToken');





 // create a new diary // 

 router.post('/diary',authenticateToken, diaryController.createDiary);
      
 
 // get all users 

 router.get('/alldiaries', diaryController.getAllDiaries); 
 


 // get a single diary //

 router.get('/:id', diaryController.getSingleDiary);
  


 // update a diary

 router.put('/:id', diaryController.updateDiary);
  


 // delete a diary 

 router.delete('/:id', diaryController.deleteDiary) ;


 

 
 
 

   module.exports = router;