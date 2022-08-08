const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: String,
  lastname: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
});

module.exports = model("users", userSchema);
