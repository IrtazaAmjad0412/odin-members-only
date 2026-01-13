import { pool } from "./pool.js";

export const getAllPosts = async () => {
  const { rows } = await pool.query(
    "SELECT id, title, content, user_id, created_at, updated_at FROM posts ORDER BY created_at ASC"
  );
  return rows;
};
