import passport from "passport";
import LocalStrategy from "passport-local";
import bcrypt from "bcryptjs";
import { getUserByUsername, getUserById } from "../db/queries.js";

export const initializeLocalStrategy = () => {
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const user = await getUserByUsername(username);
        if (!user) {
          return done(null, false, { message: "No user found" });
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
          return done(null, false, { message: "Incorrect password" });
        }
        return done(null, user);
      } catch (err) {
        console.error(err);
        return done(err);
      }
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await getUserById(id);
      done(null, user);
    } catch (err) {
      console.error(err);
      done(err);
    }
  });
};
