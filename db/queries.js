import { pool } from "./pool.js";

export const insertUser = async (firstName, lastName, username, hashedPassword) => {
  const { rows } = await pool.query(
    "INSERT INTO users (first_name, last_name, username, password_hash) VALUES ($1, $2, $3, $4) RETURNING *",
    [firstName, lastName, username, hashedPassword]
  );
  return rows[0];
};

export const getUserByUsername = async (username) => {
  const { rows } = await pool.query("SELECT * FROM users WHERE username = $1", [
    username,
  ]);
  return rows[0] || null;
};

export const getUserById = async (id) => {
  const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  return rows[0] || null;
};

export const updateMembershipStatus = async (status, userId) => {
  const { rows } = await pool.query(
    "UPDATE users SET membership_status = $1, updated_at = NOW() WHERE id = $2 RETURNING *",
    [status, userId]
  );
  return rows[0];
};

export const insertPost = async (title, content, userId) => {
  const { rows } = await pool.query(
    "INSERT INTO posts (title, content, user_id) VALUES ($1, $2, $3) RETURNING *",
    [title, content, userId]
  );
  return rows[0];
};

export const getAllPosts = async () => {
  const { rows } = await pool.query(
    "SELECT posts.id, posts.title, posts.content, posts.created_at, posts.updated_at, users.username as author FROM posts JOIN users ON posts.user_id = users.id ORDER BY posts.created_at ASC"
  );
  return rows;
};

export const deletePostById = async (id) => {
  const { rows } = await pool.query("DELETE FROM posts WHERE id = $1 RETURNING *", [id]);
  return rows[0];
};
