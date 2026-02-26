import mongoose from "mongoose";
import { comparePassword } from "../utils/password.js";

const UserSchema = new mongoose.Schema({
  name:     { type: String, required: true },
  email:    { type: String, required: true },
  password: { type: String, required: true }   
}, { timestamps: true })

UserSchema.methods.comparePassword = function (password) {
  return comparePassword(password, this.password)
}

export const User = mongoose.model("User", UserSchema)
