import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import User from "../models/User.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL:
        "http://localhost:5000/api/auth/google/callback",
    },
    async (
      accessToken,
      refreshToken,
      profile,
      done
    ) => {
      try {
        const email =
          profile.emails[0].value;

        // Find user by email
        let user =
          await User.findOne({
            email,
          });

        // User already exists
        if (user) {
          // Link Google account if not linked
          if (!user.googleId) {
            user.googleId =
              profile.id;

            await user.save();
          }

          return done(
            null,
            user
          );
        }

        // Create new user
        user = await User.create({
          googleId: profile.id,
          email,
          username:
            profile.displayName.replace(
              /\s/g,
              ""
            ),
        });

        return done(
          null,
          user
        );
      } catch (err) {
        return done(
          err,
          null
        );
      }
    }
  )
);