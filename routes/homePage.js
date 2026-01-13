import express from "express";
import { getAllPostsAndRenderHomePage } from "../controllers/homePageController.js";

const router = express.Router();

router.get("/", getAllPostsAndRenderHomePage);

export default router;
