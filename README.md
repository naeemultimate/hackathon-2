# Personal Diary App

## Overview

This is a full-stack personal diary application that allows users to create, view, update, and delete personal diary entries.

**Collaborators:**

    - Naeem Shah
    - Charlie Jackson

- **Backend**: Node.js, Express, PostgreSQL
- **Frontend**: HTML, CSS, JavaScript
- **Database**: PostgreSQL (Hosted on Supabase)
- **Architecture**: MVC (Model-View-Controller)

---

## Installation & Setup

1. Clone the repository:  
   `git clone https://github.com/naeemultimate/hackathon-2.git && cd hackathon-2`

2. Install dependencies:  
   `npm install`

3. Set up environment variables by creating a `.env` file in the root directory and adding:
    `DB_URL=postgresql://postgres.eihnpwlcafwksjeaqojv:1234@aws-0-eu-west-2.pooler.supabase.com:6543/postgres`

4. Set up the database:  
    `npm run setup-db`

5. Start the server with Node:  
    `node backend/index.js`

6. Start the server with Nodemon (for development):  
    `npm run dev`

---

## Features

- Create a diary entry with a title, content, and date
- View all diary entries sorted by date
- Search for an entry by title or date
- Update an existing entry
- Delete a diary entry
- RESTful API for CRUD operations

---

## API Endpoints

| Method | Endpoint                 | Description                        |
|--------|--------------------------|------------------------------------|
| GET    | `/diaryentries`          | Get all diary entries             |
| GET    | `/diaryentries/:title`   | Get a single diary entry by title |
| POST   | `/diaryentries`          | Create a new diary entry          |
| PATCH  | `/diaryentries/:title`   | Update an existing entry          |
| DELETE | `/diaryentries/:title`   | Delete a diary entry              |

---

## Limitations/Bugs to fix
- Need to connect working frontend to working backend
- Develop a delete button form (targets title)
- Develop an update button form (targets title & passes new content)