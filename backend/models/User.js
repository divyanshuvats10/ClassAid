const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  registration_number: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["student", "worker", "admin"], default: "student" },
});

module.exports = mongoose.model("User", UserSchema);
