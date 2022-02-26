const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();

  res.status(200).json({ users });
});

const addUser = asyncHandler(async (req, res) => {
  const { email, name, password } = req.body;

  if (!email || !name || !password) {
    res.status(400);
    throw new Error("Check required fields");
  }

  const userExists = await User.findOne({ email });

  //Check email if its already taken
  if (userExists) {
    res.status(400);
    throw new Error("Email already taken");
  }

  //Hash Password to bcrypt
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //Create User
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      __id: user.id,
      email: user.email,
      name: user.name,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }

  res.status(200).json(user);
});

const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body
    
    //Check User
    const user = await User.findOne({email})

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            __id: user.id,
            name: user.name,
            email: user.email,
        })
    } else {
        res.status(400)
        throw new Error('Invalid Credentials')
    }
})

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error("User not found.");
  }

  await user.remove();

  res.status(200).json({ id: req.params.id });
});

const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error("User not found.");
  }

  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedUser);
});

module.exports = {
  getUsers,
  addUser,
  deleteUser,
  updateUser,
  loginUser
};