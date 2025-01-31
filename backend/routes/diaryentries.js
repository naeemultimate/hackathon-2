const { Router } = require("express")

const diaryentryController = require("../controllers/diaryentries")

const diaryentryRouter = Router()

diaryentryRouter.get("/", diaryentryController.index)
diaryentryRouter.get("/:title", diaryentryController.show)
diaryentryRouter.post("/", diaryentryController.create)
diaryentryRouter.patch("/:title",  diaryentryController.update)
diaryentryRouter.delete("/:title", diaryentryController.destroy)

module.exports = diaryentryRouter