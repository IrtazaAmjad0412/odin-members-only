import passport from "passport";
import { validationResult } from "express-validator";

export const renderLoginForm = (req, res) => {
  try {
    res.render("loginForm", {
      appTitle: "Odin Clubhouse",
      pageTitle: "Log In Form",
      errors: [],
      oldInput: [],
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

export const loginUser = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render("loginForm", {
      appTitle: "Odin Clubhouse",
      pageTitle: "Log In Form",
      errors: errors.array(),
      oldInput: req.body,
    });
  }
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(200).render("loginForm", {
        appTitle: "Odin Clubhouse",
        pageTitle: "Log In Form",
        errors: [{ msg: info?.message || "Invalid credentials" }],
        oldInput: req.body,
      });
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.redirect("/");
    });
  })(req, res, next);
};

export const logoutUser = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
};
