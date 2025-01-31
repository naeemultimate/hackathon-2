const express = require('express')
const cors = require('cors')

const app = express()

const logger = require("./logger")
const diaryentryRouter = require("./routes/diaryentries")

app.use(cors())
app.use(logger)
app.use("/diaryentries", diaryentryRouter)

module.exports = app