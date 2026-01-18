import express from "express";
import {
  renderPostForm,
  createPost,
  deletePost,
} from "../controllers/postsController.js";
import { postValidation } from "../validators/postValidators.js";
import { adminOnly } from "../controllers/adminController.js";

const router = express.Router();

router.get("/new", renderPostForm);
router.post("/new", postValidation, createPost);
router.post("/:id/delete", adminOnly, deletePost);

export default router;
