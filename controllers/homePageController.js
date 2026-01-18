import { getAllPosts } from "../db/queries.js";

export const getAllPostsAndRenderHomePage = async (req, res) => {
  try {
    const posts = await getAllPosts();
    const isMember = req.user && req.user.membership_status === "member";
    const postsToRender = isMember
      ? posts
      : posts.map((post) => ({
          ...post,
          author: null,
          created_at: null,
        }));
    res.render("homePage", {
      appTitle: "Odin Clubhouse",
      posts: postsToRender,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};
