const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

mongoose.connect('mongodb://localhost:27017/blog')
var db = mongoose.connection

db.on("error", console.error.bind(console, "connection error"))
db.once("open", function(callback){
    console.log("DB connection successful")
})

var postRoutes = require("../routes/posts")
app.use("/posts", postRoutes)

app.listen(8081, function(error){
    if (error) {
        console.error(error)
    } else {
        console.log("Server listening on port 8081")
    }
})