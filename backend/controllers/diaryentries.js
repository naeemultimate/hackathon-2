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

async function create(req, res) {
    try {
        const data = req.body
        const newDiaryEntry = await Diaryentry.create(data)
        res.status(201).json(newDiaryEntry)
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

async function update(req, res) {
    try {
        const diaryTitle = req.params.title //searching by title for the entry
        const data = req.body //taking the content
        //Fetching...
        const diaryData = await Diaryentry.getOneByTitle(diaryTitle) //Taking that 1 diary entry post
        //Updating...
        const result = await diaryData.update(data) //UPDATED PART
        res.status(200).json(result) //displaying updated result
    } catch (err) {
        res.status(404).json({ error: err.message})
    }
}

async function destroy(req, res) {
    try {
        const title = req.params.title
        const entry = await Diaryentry.getOneByTitle(title)
        const result = await entry.destroy()
        res.status(204).end(result)
    } catch(err) {
        res.status(404).json({ error: err.message })
    }
}

module.exports = { index, show, create, update, destroy }