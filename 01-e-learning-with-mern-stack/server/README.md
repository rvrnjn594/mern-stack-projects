# Overview

## Backend with Node.js

The backend in this project uses the MVC architecture, which divides the application into three main parts: model, view, and controller.

These parts keep code more modular, reusable, and easier to read. The layout of the backend is as follows:

- The **coursemodels.js** is used to handle and maintain data.
- The **coursecontroller.js** file contains the main logic of the application and tells the model what to do.
- The **courseroutes.js** file contains all the routes printing towards different endpoints.
- The **index.js** file handles the application startup, which includes establishing a connection with the database, routing, and several other application functions.

1. Begin by creating the schema of the MongoDB database, which defines the structure of the database's data.  
   The **course.json** file contains the sample data and structure for the courses.
2. Now, set up a back-end API that will be used to fetch the course and establish a connection with the MongoDB service.
3. The initial setup of the backend is complete.  
   Now, implement the routes and the controller functions that will instruct the database model what actions to perform.
   - Create a route by making a get() request for the /loadAllCourses endpoint that fetches that data.
   - Create a controller function that finds the data present in the database and returns this data when the client hits the route corresponding to the /loadAllCourses endpoint.
4. Both the backend and database of our application have been set up.  
   However, the database is still empty.
   - Create an insertCourse function in controller, which adds the data present in **course.json** into the MongoDB database.
   - Call insertCourse in the loadAllCourses function so that once the /loadAllCourses endpoint gets hit, data is inserted into the MongoDB database.
5. To connect the /loadAllCourses endpoint to the back-end API, implement the following step:
   - Import courseroutes in the index.js file and it as a middleware.

## Develop frontend with React

The backend of the application is complete and connected to the database.  
Let's work on the frontend section now.

1. First, add a function component, Course, to Course.js, which will display the course details.
   **NOTE:** Use react-bootstrap to style the interface.
2. Now, add a Courses function component, which receieves three elements as props:

   - It receives the course_data array that contains all teh courses's data.
   - It receives the loaded_from_db boolean, which checks if data has been loaded from the database.
   - It receives the search_string string that keeps track of the search results in the search bar.

   The Courses component then passes each course object to the Course component via props.  
   **NOTE:** Ensure that all errors and expectations are handled properly.

3. Add a SearchCourse function component that's used for searching courses.
4. It's time to add a BaseComponent function component, which will host your Courses and SearchCourse components.  
   **NOTE:** **courses.json** file contains the sample data for the courses. Import the JSON file in BaseComponent.js and pass data to the Courses component.

   Any changes made to the search bar in SearchCourse should be propagated to the Courses component with BaseComponent.  
   If no courses are found against the matching string, display a "No Courses Found against your Search" message on the screen.

   If no courses are found against the matching string, display a "No Courses Found against your Search" message on the screen.

5. Add the BaseComponent component to test the UI.

## Connect the Frontend with the Backend

The project's current state connects the backend to the database server perfectly.  
 The frontend also appears to be working fine.  
 For this task, you'll connect the backend to the frontend.

1. Perform the following steps to set up the axios instance:

   1. Copy the URL of the browser from the right panel of the workspace.
   2. Go to api.js and set the value of Base_URL to the copied URL.
   3. Use the axios library to fetch data from the back-end server and deliver it to the React components.

2. Update the BaseComponent to use the axios instance to load data into React components when /loadAllCourses endpoint gets hit.
