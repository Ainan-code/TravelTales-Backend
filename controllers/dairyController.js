const Diary = require('../models/Diary');
const asyncHandler = require("express-async-handler");
  

// create a diary

exports.createDiary = asyncHandler( async (req, res) => {
    try {
  
      const newDiary = new Diary({
       title: req.body.title,
       content: req.body.content,
       author: req.body.author,
       location: req.body.location,
      });
      const saver =   await newDiary.save();
     
      if(saver){
        res.status(201).json(newDiary);
      }else{
        console.log('Error creating diary fail');
      }
  
    } catch (error) {
      console.error('Error creating diary item:', error); // Log the error
      res.status(500).json({ error: 'Failed to create diary item' });
    }
   });  



   // get all diaries


   exports.getAllDiaries = asyncHandler( async (req, res) => {
    try {
     const diaries = await Diary.find();
     res.status(200).json(diaries);
   } catch (error) {
     res.status(500).json({ error: 'Failed to fetch diaries items' });
   }
   });



   // get a single diary

   exports.getSingleDiary = asyncHandler(async (req, res) => {
    try {
     const diary = await Diary.findById(req.params.id);
     if (!diary) return res.status(404).json({ error: 'diary item not found' });
     res.status(200).json(diary);
   } catch (error) {
     res.status(500).json({ error: 'Failed to fetch diary item' });
   }
   });





   exports.updateDiary = asyncHandler(async (req, res) => {
    try {
     const { title, content, img, location } = req.body;
     const diary = await Diary.findByIdAndUpdate(
       req.params.id,
       { title, content, img, location },
       { new: true }
     );
     if (!diary) return res.status(404).json({ error: 'diary item not found' });
     res.status(200).json(diary);
   } catch (error) {
     res.status(500).json({ error: 'Failed to update diary item' });
   }
   });


   exports.deleteDiary = asyncHandler(  async (req, res) => {
    try {
     const diary = await Diary.findByIdAndDelete(req.params.id);
     if (!diary) return res.status(404).json({ error: 'diary item not found' });
     res.status(200).json({ message: 'diary item deleted' });
   } catch (error) {
     res.status(500).json({ error: 'Failed to delete diary item' });
   }
   });


   