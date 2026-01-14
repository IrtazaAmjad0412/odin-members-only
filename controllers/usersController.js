import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";
import { insertUser } from "../db/queries.js";

export const renderSignUpForm = (req, res) => {
  try {
    res.render("signUpForm", {
      appTitle: "Odin Clubhouse",
      pageTitle: "Sign Up Form",
      errors: [],
      oldInput: [],
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

export const createUser = async (req, res) => {
  try {
    const { firstName, lastName, username, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("signUpForm", {
        appTitle: "Odin Clubhouse",
        pageTitle: "Sign Up Form",
        errors: errors.array(),
        oldInput: req.body,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await insertUser(firstName, lastName, username, hashedPassword);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};
