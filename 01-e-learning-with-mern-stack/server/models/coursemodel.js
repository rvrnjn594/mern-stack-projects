const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// 1. creating courseSchema
const CourseSchema = new Schema({
  titles: String,
  author: String,
  overview: String,
  free: Boolean,
  img: String,
});

module.exports = mongoose.model("CourseModel", CourseSchema);
