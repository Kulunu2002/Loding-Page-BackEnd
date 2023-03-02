require("./db/mongoose")
const express = require("express")
const bodyparsar = require("body-parser")
const cors = require("cors")
const userRouter = require("./routes/user")


const app = express()

app.use(cors())
app.use(bodyparsar.json())
app.use(userRouter)


const port = 6000;

app.listen(port, () => {
    console.log("server is up and running on port" + port)
})