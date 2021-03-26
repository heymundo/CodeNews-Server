const router = require("express").Router();
const User = require("../models/Post.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authLockedRoute = require("./Users/authLockedRoute");
const {Comment} = require('../models/Comment.js')
router.get('/', async (req, res) => {
    try {
        const comment = await Comment.find({})
        console.log(comment)
        // res.json( { comment })
    } catch (err) {
        res.json({err})
        console.log(err)
    }
})

router.post('/', async (req, res) => {
    try {
        const newComment = await Comment.create({
            comment_content: req.body.comment_content
        })
        await newComment.save()
        console.log(newComment)

    } catch(error) {
        console.log('💔', error)
    }

    // res.json(newComment)
})





module.exports = router;












// router.put('/:id', async (req, res) => {
//     const updateComment = await Comment.findByIdAndUpdate(req.params.id, {
//         comment_content: req.body.comment_content
//     })
//     res.json(updateComment)
// })


// router.delete('/:id', async (req, res) => {
//     const deleteComment = await Comment.findByIdAndDelete(req.params.id)
//     res.json(deleteComment)
// })










// // Read (Index)
// router.get('/', async (req, res) => {
    //     const allComment = await Comment.find({})
//     res.json(allComment)
// })


// Update
// router.put('/:id/comment_content', async (req, res) => {
//     try {
//         const comment = await Comment.updateOne({})
//         console.log(comment)
//         res.json( { comment })
//     } catch (err) {
//         res.json({err})
//         console.log(err)
//     }
// })


// router.delete('/:id/comment_content', async (req, res) => {
//     try {
//         const comment = await Comment.delete({})
//         console.log(comment)
//         res.json( { comment })
//     } catch (err) {
//         res.json({err})
//         console.log(err)
//     }
// })
// Delete


