import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  cell: { type: Number, required: true },
  location: { type: String, required: true },
  createdAt: { type: Date, default: new Date() },
});

var UsersModel = mongoose.model("UsersModel", userSchema);

export default UsersModel;
