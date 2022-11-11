// Mongoose Schema for a Blog Post

const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a title'],
        trim: true,
        maxlength: [50, 'Title cannot be more than 50 characters']
    },
    body: {
        type: String,
        required: [true, 'Please provide a body'],
        maxlength: [500, 'Body cannot be more than 500 characters']
    },
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;