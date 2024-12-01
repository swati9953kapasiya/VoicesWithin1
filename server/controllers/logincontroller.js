import bcrypt from "bcryptjs";
import loginModel from "../models/loginSchema.js";
import registerModel from "../models/registerSchema.js";

export const submitLogin = async (req, res) => {
  try {
    const { loginEmail, loginPassword } = req.body;

    const userExists = await registerModel.findOne({ registerEmail: loginEmail });

    if (!userExists) {
      return res.status(401).json({ message: "User does not exist" });
    }

    const passwordMatch = await bcrypt.compare(loginPassword, userExists.registerPassword);
    
    if (!passwordMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    const loginEntryExists = await loginModel.findOne({ loginEmail });

    if (!loginEntryExists) {
      const newLoginEntry = new loginModel({
        loginEmail,
      });
      await newLoginEntry.save();
      return res.status(201).json({ message: "Login successful, account logged in" });
    } else {
      return res.status(200).json({ message: "User already logged in" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to log in" });
  }
};
