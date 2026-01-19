const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is not valid");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error('Password should not contain "password"');
      }
    },
  },
  title: {
    type: String,
    trim: true,
    validate(value) {
      if (value && value.length < 5) {
        throw new Error("Title must be at least 5 characters");
      }
    },
  },
  tokens:[{
    token:{
      type:String,
      required:true
    }
  }]
});
userSchema.statics.loginCredentials = async function (email, password) {
  const verifiedUser = await this.findOne({ email });
  if (!verifiedUser) {
    throw new Error("Invalid Email");
  }
  const verifyPassword = await bcrypt.compare(
    password,
    verifiedUser.password,
  );
  if (!verifyPassword) {
    throw new Error("Incorrect Password");
  }
  return verifiedUser
};

userSchema.methods.genrateToken = async function () {
  const user = this
  const token = jwt.sign({_id:user._id.toString()},"ShivamSingla#####123")
  user.tokens = user.tokens.concat({ token })
  await user.save()
  return token
}

userSchema.pre("save", async function () {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
