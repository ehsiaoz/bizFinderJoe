// Require mongoose
var mongoose = require("mongoose");

// Create a Schema class with mongoose
var Schema = mongoose.Schema;

// Create a UserSchema with the Schema class
var UserSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    validate: []
  },
  first_name: {
    type: String
  },
  last_name: {
    type: String
  }
});

// Create the User model with the UserSchema
var User = mongoose.model("User", UserSchema);

// Export the user model
module.exports = User;
