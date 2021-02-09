//DEPENDENCIES
require("dotenv").config()
const mongoose = require("mongoose")

//GLOBAL VARIABLES
const { MONGODBURI = "mongodb://localhost:27017/database" } = process.env
const config = {useUnifiedTopology: true, useNewUrlParser: true}
const DB = mongoose.connection

//ESTABLISH CONNECTION
mongoose.connect(MONGODBURI, config)

//HANDLE DATABASE EVENTS
DB.on("open", () => console.log("Connected to Mongo"))
.on("close", () => console.log("Mongo connection closed"))
.on("error", (err) => console.log("ERROR: ", err))

// EXPORT CONNECTED MONGOOSE OBJECT
module.exports = mongoose

