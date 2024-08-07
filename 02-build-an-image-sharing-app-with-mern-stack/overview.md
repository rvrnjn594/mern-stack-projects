# Task 1: Set up the Node.js Server and MongoDB Connection

Now, set up a back-end API that will be used to register/log in users, create posts, and establish a connection with the MongoDB service.  
 Before doing that, add your MongoDB connection string in order to connect with a cluster.

After getting the connection string and adding the IP address, perform the following operations in this task:

### Introduction

###### Task 0: Getting Started

Before starting work on the application, verify if the initial React project and the backend server that has been provided are working.

###### Task 1: Set up the Node.js Server and MongoDB Connection

Set up a back-end API that will be used to register/log in users, create posts, and establish a connection with the MongoDB service.  
 Before doing that, add your MongoDB connection string in order to connect with a cluster.

- Open env file and add the connection string there.
- In the index.js file:
  - Import the .env file from the api directory.
  - Run the server on port 8080 using the express framework.
  - Establish a connection to the MongoDB database using the connection string stored in the .env file.
  - Create a new route /api/upload to allow uploading images to the server.
    - Store the uploaded image files in the images directory.
    - Allow only a single file to be uploaded per request.

> **HINT**
>
> - Replace the Secret key as a value to the MONGO_URL key in the .env file.
> - Import express and mongoose using the require function.
>
>       const express = require("express")
>       const app = express();
>
>       const mongoose = require("mongoose");
>
> - Use the MONGO_URL environment variable defined in the .env file to connect to the MongoDB cluster.
> - Use multer to allow the uploading of images to the server.
> - Use multer.diskStorage to store the uploaded images in the public/images directory.
> - Add the app.listen function to start the server on port 8080.

###### Task 2: Create a User Model

Create a model for user with a schema that describes the properties of the model.  
 These can include the username, email, password, followers, followings, and so on, of a user.

> - Use mongoose to create the user model.
> - The schema should have teh following properties:
>   - A username should always be required when creating a new user.
>   - An email and a password.
>   - Separate arrays to store the list of followers and followings of a user.
>   - A boolean to determine if the user is an admin or not.
> - Export the model and the schema.

###### Task 3: Create a Post Model

Create a model for an image post with a schema that describes the properties of the model.  
 These can include the user ID related to the post, description, and post image, among others.

> - Use mongoose to create the post model.
> - Ensure the schema has the user ID, post description, and post image properties.
> - Export the model and the schema.

###### Task 4: Create Register and Login Routes

Now that the user model has been created, implement the routes to register and log in a particular user.

> - Create a route by making a post() request to /register endpoint that registers a new user.
>   - Create a new user using the properties passed in the request.
>   - If the email or the username passed in the request already exists in the database, respond with a 400 status code.
>   - If the registration is successful, save teh user in the database, and respond with the user object and a 200 status code.
> - Create a route by making a post() request to /login endpoint that logs in an existing user.
>   - If the login email does not exist in the database, respond with a 404 code status, stating that the user does not exist.
>   - If the login password is not valid, respond with a 400 status code, stating that the entered password was incorrect.
>   - If the login is successful, return the user object and a 200 status code.

###### Task 5: Create User Routes

Implement routes for retrieving and updating a user's data.

> - Create a route by making a get() request to the / endpoint that gets a user from the database.
> - Create a route to make a get() request to the /followers/:userId endpoint to retrieve all the users that a particular user follows.
> - Create a route by making a put() request to the /:id/follow endpoint that allows the current user to follow another user.
> - Create a route by making a put() request to the /:id/unfollow endpoint, that allows the current user to unfollow another user.

###### Task 6: Create Post Routes

Now, implement the routes for retrieving and creating a post.

> - Create a route by making a post() requests to the / endpoint that creates a new image post.
>   - Create a new post using the properties passsed in the request body.
>   - Encode the image to the base64 format and save the post in the database. Return the post object and a 200 status code.
> - Create a route to make a get() request to the /:id endpoint that gets a single post from the database.
>   - The post ID is passed in the request parameters, which will be used to get the post's information.
>   - Respond with the post object and a 200 status code.
> - Create a route to make a get() requests to the /profile/:username endpoint to get all the posts of the current user based on their username.
> - Create a route by making a get() request to the /timeline/:userId endpoint that gets all the posts of the current user and their followed users.
>   - Create a list consisting of all the posts of the current user and the posts made by the users they follow.
>   - Respond with the post list and 200 status code.

### Develop the Login and Register Pages

- Task 7: Create Reducers to Set up the Initial State
- Task 8: Implement the Login Component

### Develop the Home and Profile Pages
