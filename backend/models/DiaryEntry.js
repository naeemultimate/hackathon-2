const db = require("../database/connect")

class Diaryentry {
    constructor({diary_id, title, content, entry_date, created_at}) {
        this.diary_id = diary_id
        this.title = title
        this.content = content
        this.entry_date = entry_date
        this.created_at = created_at
    }

    static async getAll() {
        const response = await db.query("SELECT * FROM diary;")
        if (response.rows.length === 0) {
            throw Error("No diary entries available")
        }
        return response.rows.map(d => new Diaryentry(d))
    }

    static async getOneByTitle(title) {
        const response = await db.query("SELECT * FROM diary WHERE LOWER(title) = LOWER($1);", [title])
        if (response.rows.length != 1) {
            throw Error("Unable to locate entry")
        }
        return new Diaryentry(response.rows[0])
    }

    static async create(data) {
        const { title, content, entry_date } = data
        const existingEntry = await db.query("SELECT title FROM diary WHERE LOWER(title) = LOWER($1);", [title])
        if (existingEntry.rows.length === 0) {
            let response = await db.query("INSERT INTO diary (title, content, entry_date) VALUES ($1, $2, $3) RETURNING *;", [title, content, entry_date])
            return new Diaryentry(response.rows[0])
        } else {
            throw Error("An entry with this title already exists")
        }
    }

    async update(data) {
        const response = await db.query("UPDATE diary SET content = $1 WHERE title = $2 RETURNING *;", [data,this.title])
        if(response.rows.length != 1) {
            throw new Error("Unable to update Diary Entry")
        }
        return new Diaryentry(response.rows[0])
    }

    async destroy() {
        let response = await db.query("DELETE FROM diary WHERE title = $1 RETURNING *;", [this.title])
        return {message: "Diary entry deleted succesfully!"}
    }
}

module.exports = Diaryentry