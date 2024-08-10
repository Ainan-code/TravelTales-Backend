const express = require('express');
const router = express.Router();

const diaryController = require('../controllers/dairyController');





 // create a new diary // 

 router.post('/diary', diaryController.createDiary);
      
 
 // get all users 

 router.get('/alldiaries', diaryController.getAllDiaries); 
 


 // get a single diary //

 router.get('/:id', diaryController.getSingleDiary);
  


 // update a diary

 router.put('/:id', diaryController.updateDiary);
  


 // delete a diary 

 router.delete('/:id', diaryController.deleteDiary) ;


 

 
 
 

   module.exports = router;