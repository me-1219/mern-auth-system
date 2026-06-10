import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";

const router = express.Router();

// Start Google Login
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

// Callback
router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    const token = jwt.sign(
      { id: req.user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.redirect(`http://localhost:5173?token=${token}`);
  }
);

export default router;