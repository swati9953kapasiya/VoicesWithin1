import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const registerSchema = mongoose.Schema({
  avatar: {
    type: String,
    required: true,
    unique: true,
  },
  registerPassword: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        return value.length >= 6 && /\d/.test(value);
      },
      message:
        "Password must be at least 6 characters long and contain at least one number",
    },
  },
  registerEmail: {
    type: String,
    required: true,
  },
});

registerSchema.pre("save", async function (next) {
  if (this.isModified("registerPassword")) {
    this.registerPassword = await bcrypt.hash(this.registerPassword, 10);
  }
  next();
});

const registerModel = mongoose.model("registerModel", registerSchema);

export default registerModel;
