import mongoose from "mongoose";
import { hashSync } from "bcryptjs";

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  nickname: { type: String, unique: true, required: true },
  picture: { type: String, required: true },
  admin: { type: Boolean, required: false },
  scores: { type: [Number], required: true, default: [] },
});

UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const hashedPassword = hashSync(this.password, 10);
  this.password = hashedPassword;
  next();
});

const User = mongoose.model("User", UserSchema);

export default User;
