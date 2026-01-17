import express from "express";
import { renderPostForm, createPost } from "../controllers/postsController.js";
import { postValidation } from "../validators/postValidators.js";

const router = express.Router();

router.get("/new", renderPostForm);
router.post("/new", postValidation, createPost);

export default router;
