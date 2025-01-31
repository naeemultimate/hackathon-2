const db = require("../databse/connect")

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
        if (response.rows.legnth === 0) {
            throw Error("No diary entries available")
        }
        return response.rows.map(d => new Diaryentry(d))
    }

    static async getOneByTitle(title) {
        const response = await db.query("SELECT * FROM diary WHERE LOWER(title) = LOWER($1);", [title])
        if (response.rows.legnth != 1) {
            throw Error("Unable to locate entry")
        }
        return new Diaryentry(response.rows[0])
    }
}

module.exports = Diaryentry