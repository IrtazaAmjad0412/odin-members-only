import express from "express";
import { renderPostForm } from "../controllers/postsController.js";

const router = express.Router();

router.get("/new", renderPostForm);

export default router;
