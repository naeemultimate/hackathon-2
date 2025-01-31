require("dotenv").config()
const db = require("./database/connect")
const app = require("./app")
const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
})

