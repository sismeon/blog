const mongoose = require("mongoose")
const Schema = mongoose.Schema

var PostSchema = new Schema({
    title: String,
    description: String,
    date: Date,
    content: String
})

var Post = mongoose.model("Post", PostSchema)
module.exports = Post