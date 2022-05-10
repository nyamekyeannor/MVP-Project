const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "postgres",
});
const User = sequelize.define("user", {
  name: {
    field: "Name",
    type: Sequelize.STRING,
  },
});
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// This will output "Go for a run"
app.get("/CreateUser", (request, response) => {
  Users.findAll().then((users) => {
    response.json(users);
  });
});

app.get("/", (request, response) => {
  console.log(users);
  response.json({ info: "Welcome to local host 300" });
});

// command to run server
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
