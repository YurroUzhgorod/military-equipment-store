const mongoose = require("mongoose");
const crypto = require("crypto");

const { Schema } = mongoose;

const UsersSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    minlength: 2,
    maxLength: 20,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxLength: 20,
    trim: true,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
  // favoriteProduct: { type: Array, default: [] },
  isAdmin: { type: Boolean, default: false },
  hash: { type: String },
  salt: { type: String },
});

//--------------------------------
UsersSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString("hex");
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
};

//----------------------------
UsersSchema.methods.validPassword = function (password) {
  //---------------
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
  //-----------------------
  return this.hash === hash;
};

module.exports = mongoose.model("Users", UsersSchema);
