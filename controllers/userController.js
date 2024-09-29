const User = require('../models/Users');
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


function generateAccessToken(user) {
  const payload = {
    id: user._id,
   
  };
  
  const secret = process.env.JWT_SECRET;
  const options = { expiresIn: '1h' };

  return jwt.sign(payload, secret, options);
}

exports.getLoggedInUser = asyncHandler(async (req, res) => {
  const { _id, username, email } = await User.findById(req.user.id);
  res.status(200).json({
    id: _id,
    username,
    email,
  });
});

exports.createUser = asyncHandler( async (req, res) => {
  const { username, password } = req.body;

  if (!username  || !password) {
    res.status(400).send("Please add all fields");
    
  }

  // check if user exists
  const userExists = await User.findOne({ username });
  if (userExists) {
    res.status(400).send("User already exists");
    
  }


   // create hash password
   const salt = await bcrypt.genSalt(10);
   const hashedPassword = await bcrypt.hash(password, salt);
   
  
      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
       
      });
      const saver =   await newUser.save();
     
      if (saver) {
        res.status(201).json({
         message: "user created succesfuly",
         
         
          token: generateAccessToken(newUser._id),
        });
      } else {
      res.status(400).send("Invalid user data");
        
      }
   });  

   // user login 

   exports.loginUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
  
    if (!username || !password) {
      res.status(400).send("Please add all fields");
     
    }
  
    // Check for user email
    const user = await User.findOne({ username });
  
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = generateAccessToken(user._id);
      res.json({
        id: user._id,
       
        
        token: token,
      });
    } else {
      res.status(400).send("Invalid credentials");
     
    }
  });


   exports.getAllUsers = asyncHandler( async (req, res) => {
    try {
     const users = await User.find();
     res.status(200).json(users);
   } catch (error) {
     res.status(500).json({ error: 'Failed to fetch users items' });
   }
   });


   exports.getsingleUser = asyncHandler(async (req, res) => {
    try {
     const user = await User.findById(req.user.id);
     if (!user) return res.status(404).json({ error: 'user item not found' });
     res.status(200).json( { message: "Profile data fetched successfully",
      user: {
        id: user._id,
        username: user.username,
      },});
   } catch (error) {
     res.status(500).json({ message: 'Failed to fetch user item' });
   }
   });


   exports.updateUser = asyncHandler(async (req, res) => {
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


   exports.deleteUser = asyncHandler(  async (req, res) => {
    try {
     const user = await User.findByIdAndDelete(req.params.id);
     if (!user) return res.status(404).json({ error: 'user item not found' });
     res.status(200).json({ message: 'user item deleted' });
   } catch (error) {
     res.status(500).json({ error: 'Failed to delete user item' });
   }
   });

  