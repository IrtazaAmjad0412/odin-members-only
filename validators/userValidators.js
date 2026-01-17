import { body } from "express-validator";

export const signUpValidation = [
  body("firstName").isString().trim().notEmpty().withMessage("First name is required"),
  body("lastName").isString().trim().notEmpty().withMessage("Last name is required"),
  body("username")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Must be a valid email")
    .normalizeEmail(),
  body("password")
    .isString()
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  body("confirmPassword")
    .isString()
    .notEmpty()
    .withMessage("Please confirm your password")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords do not match");
      }
      return true;
    }),
];
