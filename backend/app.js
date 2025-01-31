const express = require('express')
const cors = require('cors')
const diaryentryRouter = require("./routes/diaryentries")

const app = express()

const logger = require("./logger")


app.use(cors())
app.use(express.json())
app.use(logger)
app.use("/diaryentries", diaryentryRouter)

app.get("/", (req, res) => {
    res.status(200).json({
      title: "Diary Entry Logger!",
      description: "All our secrets here...shhhh"
    })
  })

module.exports = app