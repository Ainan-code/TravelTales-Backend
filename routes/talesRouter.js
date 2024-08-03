const express = require('express');
const router = express.Router();

const User = require('../models/Users');

 // Routes for users //

 // create a new user // 

 router.post('/', async (req, res) => {
  try {

    const newUser = new User({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
    });
    const saver =   await newUser.save();
   
    if(saver){
      res.status(201).json(newUser);
    }else{
      console.log('Error creating user fail');
    }

  } catch (error) {
    console.error('Error creating user item:', error); // Log the error
    res.status(500).json({ error: 'Failed to create user item' });
  }
 });       
 
 // get all users 

 router.get('/', async (req, res) => {
  try {
   const users = await User.find();
   res.status(200).json(users);
 } catch (error) {
   res.status(500).json({ error: 'Failed to fetch users items' });
 }
 });


 // get a single user //

 router.get('/:id', async (req, res) => {
  try {
   const user = await User.findById(req.params.id);
   if (!user) return res.status(404).json({ error: 'user item not found' });
   res.status(200).json(user);
 } catch (error) {
   res.status(500).json({ error: 'Failed to fetch user item' });
 }
 });


 // update a user

 router.put('/:id', async (req, res) => {
  try {
   const { username, password, email } = req.body;
   const user = await User.findByIdAndUpdate(
     req.params.id,
     { username, password, email },
     { new: true }
   );
   if (!user) return res.status(404).json({ error: 'user item not found' });
   res.status(200).json(user);
 } catch (error) {
   res.status(500).json({ error: 'Failed to update user item' });
 }
 });


 // delete a user 

 router.delete('/:id', async (req, res) => {
  try {
   const user = await User.findByIdAndDelete(req.params.id);
   if (!user) return res.status(404).json({ error: 'user item not found' });
   res.status(200).json({ message: 'user item deleted' });
 } catch (error) {
   res.status(500).json({ error: 'Failed to delete user item' });
 }
 });

 
 
 

   module.exports = router;