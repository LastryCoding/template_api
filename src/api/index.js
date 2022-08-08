const app = require("express")();
const users = require("./users/routes");

app.use("/users", users);

module.exports = app;
