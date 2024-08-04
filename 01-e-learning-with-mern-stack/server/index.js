const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.use(cors());

// 5. Import courseroutes using require, and add routes as a middleware function after cors middleware.
const courseroutes = require("./routes/courseroutes");

app.use(courseroutes);

// 2. create express server listening on port 3000 and enables cors. It also uses the connection string and connects to the database.
const PORT = process.env.port || 3000;
const mongoDB =
  "mongodb+srv://rvrnjn594:5RHTDRUNU1AQyxjB@cluster1.wvyvmf2.mongodb.net/?retryWrites=true&w=majority&appName=cluster1";

mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the Database");
  })
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
