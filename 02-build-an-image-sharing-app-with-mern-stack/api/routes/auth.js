// Now that the user model has been created, implement the routes to register and log in a particular user.
// Task 4: Create Register and Login Routes

const router = require("express").Router();
const User = require("../models/User");

// Register a User Route
router.post("/register", async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    // Check if email already exists
    const cUserEmail = await User.findOne({
      email: req.body.email,
    });
    if (cUserEmail) {
      return res.status(400).json("Email already exists");
    }
    // Check if username already exists
    const cUserName = await User.findOne({
      username: req.body.username,
    });
    if (cUserName) {
      return res.status(400).json("Username already exists");
    }
    // Save the User and respond with the user
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login a User Route
router.post("/login", async (req, res) => {
  try {
    // Check valid email
    const user = await User.findOne({
      email: req.body.email,
    });
    if (!user) {
      return res.status(404).json("User not found");
    }
    // Check valid password
    const userPassword = await User.findOne({
      password: req.body.password,
    });
    if (!userPassword) {
      return res.status(400).json("Wrong Password");
    }
    // Respond with the user if the email and password are valid
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
