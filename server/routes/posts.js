var router = require("express").Router()
var Post = require("../models/post")

//route things here

//create a new post
router.post("/", function(req, res) {
    var new_post = new Post({
        title: req.body.title,
        description: req.body.description,
        date: Date.now(),
        content: req.body.content
    })
    
    new_post.save(function(error){
        if(error){
            console.log(error)
        }
        res.send({
            success: true,
            message: 'Post saved successfully!'
        })
    })
})

//return all posts
router.get("/", function(req, res){
    Post.find({}, function(error, posts){
        if(error) {
            console.error(error)
        }
        res.send({
            posts: posts
        })
    }).sort({_id:-1})
})

//return a single post
router.get("/:id", function(req, res){
    Post.findById(req.params.id, function(error, post){
        if (error) {
            console.error(error)
        }
        res.send({
            post: post
        })
    })
})

//update a post
router.put("/:id", function(req, res){
    Post.findById(req.params.id, function(error, post){
        if (error) {
            console.error(error)
        }
        post.title = req.body.title
        post.description = req.body.description
        post.content = req.body.content

        post.save(function(error){
            if (error) {
                console.log(error)
            }
            res.send({
                success: true
            })
        })
    })
})

//delete a post
router.delete("/:id", function(req, res){
    Post.remove({
        _id: req.params.id
    }), function(error, post){
        if (error) {
            console.error(error)
        }
        res.send({
            success: true
        })
    }
})

module.exports = router