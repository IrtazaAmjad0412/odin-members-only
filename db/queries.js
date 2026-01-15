import { pool } from "./pool.js";

export const getAllPosts = async () => {
  const { rows } = await pool.query(
    "SELECT id, title, content, user_id, created_at, updated_at FROM posts ORDER BY created_at ASC"
  );
  return rows;
};

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
