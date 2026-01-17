import { body } from "express-validator";

export const postValidation = [
  body("title")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 1, max: 255 })
    .withMessage("Title cannot exceed 255 characters"),
  body("content")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("Content is required")
    .isLength({ min: 5, max: 10000 })
    .withMessage("Content must be at least 5 characters long"),
];
