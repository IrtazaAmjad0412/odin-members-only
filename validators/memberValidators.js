import { body } from "express-validator";

export const memberValidation = [
  body("passcode").isString().notEmpty().withMessage("Passcode is required"),
];
