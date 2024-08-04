const express = require("express");
const coursecontroller = require("../controllers/coursecontroller");
const router = express.Router();

// 3.a. Create a route for the /loadAllCourse endpoint and uses the coursecontroller element.
router.get("/loadAllCourses", coursecontroller.loadAllCourses);

module.exports = router;
