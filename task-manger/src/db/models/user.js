const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is not valid");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error('Pssword Should not contain string "password"');
      }
    },
  },
  title: {
    type: String,
    validate(value) {
      if (value.length < 5) {
        throw new Error("Title Should be less then 5 characters");
      }
    },
  },
});





/* trunk-ignore(prettier/SyntaxError) */
module.exports = User
