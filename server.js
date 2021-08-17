require("dotenv").config()
const PORT = process.env.PORT

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const mongoose = require('./db/connection')

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan("tiny"))

// place main router here once setup
const swnWeaponsRouter = require('./controllers/swnWeapons')

app.get("/", (req,res) => res.send("🛸 🛸 🛸"))
// add additional routes here
app.use("/swnweapons", swnWeaponsRouter)

app.listen(PORT, () => console.log(`📡 Listening on port ${PORT}`))