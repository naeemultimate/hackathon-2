const { Router } = require("express")

const diaryentryController = require("../controllers/diaryentries")

const diaryentryRouter = Router()

diaryentryRouter.get("/", diaryentryController.index)

module.exports = diaryentryRouter