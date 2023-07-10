const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' });
};

//signup user
const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);
    //create a token
    const token = createToken(user._id);
    // console.log(token, 'token');
    console.log(user, 'user');
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//login user
const loginUser = async (req, res) => {
  res.json({ message: 'user login' });
};

module.exports = {
  signupUser,
  loginUser,
};
