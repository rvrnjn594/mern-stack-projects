// Add your imports here
import axios from "axios";
/*
    Set Base_URL to the URL of the browser in the right pane ==>
    Note: Sample value has been set for your reference only. 
    Replace "81eqeq94rnq2n.educative.run/" with the copied URL 
*/

// Note the "/" at the end of the URL. Dont remove it yourself.
// http://localhost:3000/loadAllCourses
let Base_URL = "localhost";

// Use the Final_URL when you need to set URL for axios GET request
const Final_URL = "http://" + Base_URL + ":3000";
console.log(Final_URL);

// Write your code here
const instance = axios.create({
  baseURL: Final_URL,
});

export default instance;
