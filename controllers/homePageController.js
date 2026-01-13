import { getAllPosts } from "../db/queries.js";

export const getAllPostsAndRenderHomePage = async (req, res) => {
  try {
    const posts = await getAllPosts();
    res.render("homePage", { title: "Odin Clubhouse", posts: posts });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};
