const Post = require('../models/Post');

exports.createPost = async (req, res, next) => {
    const { title, body } = req.body;

    try {
        const post = await Post.create({
            title,
            body
        });

        res.status(201).json({
            success: true,
            title: title,
            body: body
        });
    } catch(error) {
        next(error);
    }
};


exports.getPosts = (req, res, next) => {
    console.log("someone is trying to access posts");
    // return the names of all users in the database
    Posts.find({}, (err, posts) => {
        data = posts.map(post => post.title);
        if (err) {
            return next(new ErrorResponse('Could not find any posts', 404));
        } else {
            res.status(200).json({
                success: true,
                data: data
            });
        }
    });
}

exports.deleteFirstPost = (req, res, next) => {
    console.log("someone is trying to delete a post");
    // delete the first user in the database
    Posts.findOneAndDelete({}, (err, post) => {
        if (err) {
            return next(new ErrorResponse('Could not find any posts', 404));
        } else {
            res.status(200).json({
                success: true,
                data: post
            });
        }
    });
}