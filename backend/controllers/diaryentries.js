const Diaryentry = require("../models/Diaryentry")

async function index(req, res) {
    try {
        const diaryentries = await Diaryentry.getAll()
        res.status(200).json(diaryentries)
    } catch(err) {
        res.status(500).json({ error: err.message })
    }
}

async function show(req, res) {
    try {
        let title = req.params.title
        const diaryentry = await Diaryentry.getOneByTitle(title)
        res.status(200).json(diaryentry)
    } catch(err) {
        res.status(404).json({ error: err.message })
    }
}

module.exports = { index }