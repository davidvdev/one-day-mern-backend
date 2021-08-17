require("dotenv").config()
const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI

const config = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

mongoose.connect(MONGODB_URI, config)

mongoose.connection
    .on("open", () => console.log("Mongo connection open"))
    .on("close", () => console.log("Mongo connection closed"))
    .on("error", (err) => console.log("Mongo connection error: ", err))

module.exports = mongoose;