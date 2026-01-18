# odin-members-only

A small private club web app built with **Node.js**, **Express**, **EJS**, **PostgreSQL**, and **Passport.js** for authentication. Users can sign up, log in, create posts, join as members, and admins can delete posts.

---

## Features

- **User Accounts**

  - Sign up with first name, last name, email, and password.
  - Passwords are securely hashed using bcrypt.
  - Users start with basic membership status.

- **Authentication**

  - Log in and log out with Passport.js local strategy.
  - Session management with `express-session`.

- **Membership**

  - Users can join the club by entering a secret passcode.
  - Only members (or admins) can see post authors and timestamps.

- **Posts**

  - Authenticated users can create posts with a title and content.
  - Posts display on the home page, with author/date hidden for non-members.
  - Admin users can delete posts.

- **Admin**
  - Users can become admins via a secret passcode.
  - Admins can see all posts, authors, and timestamps, and delete posts.

---

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL
- **Authentication:** Passport.js (Local Strategy), bcrypt
- **Templating:** EJS
- **Validation:** express-validator

---

## Setup Instructions

1. **Clone the repository**

```bash
git clone <repository-url>
cd <repo-folder>
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the server**

```bash
node app.js
```
