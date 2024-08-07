const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");
const fs = require("fs");

// create an image post
router.post("/", async (req, res) => {
  // check if the image is a url or a file
  let checkUrl = req.body.img.split("https");
  let isUrl = false;

  // If the image is a url, set isUrl to true
  if (checkUrl[0].length < 1) isUrl = true;

  // encode image to base64
  function base64_encode(file) {
    return "data:image/jpeg;base64," + fs.readFileSync(file, "base64");
  }

  // get the base64 string
  let base64str = req.body.img;
});
