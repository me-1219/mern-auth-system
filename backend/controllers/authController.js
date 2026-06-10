import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import crypto from "crypto";
import sendEmail from "../utils/sendEmail.js";


//register
export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existing = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (existing) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const verificationCode =
      Math.floor(
        100000 + Math.random() * 900000
      ).toString();

    const user = await User.create({
      username,
      email,
      password: hashedPassword,

      verificationCode,

      verificationCodeExpires:
        Date.now() + 10 * 60 * 1000,
    });

    await sendEmail(email, verificationCode);

    res.status(201).json({
      message:
        "Registration successful. Check your email for verification code.",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// LOGIN (email OR username)
export const login = async (req, res) => {
  try {
    const { identifier, password } = req.body;

    const user = await User.findOne({
      $or: [{ email: identifier }, { username: identifier }],
    });

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    // Google account
    if (!user.password) {
      return res.status(400).json({
        message: "Use Google login",
      });
    }

    // Email verification check
    if (!user.isVerified) {
      return res.status(401).json({
        message: "Please verify your email before login",
      });
    }

    const match = await bcrypt.compare(
      password,
      user.password
    );

    if (!match) {
      return res.status(400).json({
        message: "Invalid password",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        isVerified: user.isVerified,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};



export const verifyEmail = async (req, res) => {
  try {
    const { email, code } = req.body;

    const user = await User.findOne({
      email,
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (
      user.verificationCode !== code
    ) {
      return res.status(400).json({
        message: "Invalid code",
      });
    }

    if (
      user.verificationCodeExpires <
      Date.now()
    ) {
      return res.status(400).json({
        message: "Code expired",
      });
    }

    user.isVerified = true;

    user.verificationCode = null;

    user.verificationCodeExpires = null;

    await user.save();

    res.json({
      message: "Email verified successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//get all registered users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({})
      .select("-password")
      .sort({ createdAt: -1 });

    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({
      message: "Failed to fetch users",
    });
  }
};