import { validationResult } from "express-validator";
import { insertPost } from "../db/queries.js";

export const renderPostForm = (req, res) => {
  try {
    res.render("postForm", {
      appTitle: "Odin Clubhouse",
      pageTitle: "Post Form",
      errors: [],
      oldInput: [],
    });
  } catch (err) {
    console.error;
    res.status(500).send("Server Error");
  }
};

export const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("postForm", {
        appTitle: "Odin Clubhouse",
        pageTitle: "Post Form",
        errors: errors.array(),
        oldInput: req.body,
      });
    }
    await insertPost(title, content, req.user.id);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};
