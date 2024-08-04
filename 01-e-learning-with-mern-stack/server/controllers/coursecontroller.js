// 3.b. Import the schema model and create a function called loadAllCourses that finds the database data, sets the response headers, and returns the data in the form of JSON.
const CourseModel = require("../models/coursemodel");

// 4.a. Import the data from course.json file.
const data = require("../data/data.json");

// 4.b. Write the insertCourse function, which adds the imported data of course.json inside the database using the insertMany function.
async function insertCourses() {
  const result = await CourseModel.insertMany(data);
  if (result) console.log("Course Inserted Successfully with elements \n");
  else console.log("Error on Inserting Course: ");
}

// 4.b. Call this insertCourses function in the loadAllCourses function.
module.exports.loadAllCourses = async (req, res) => {
  try {
    insertCourses(); // insertCourses function should be placed before the loadAllCourses
    results = await CourseModel.find();
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.json(results);
  } catch (error) {
    console.log(error);
  }
};
