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
