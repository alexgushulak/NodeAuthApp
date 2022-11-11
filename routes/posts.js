const express = require('express');
const router = express.Router();
const { getPosts, deleteFirstPost, createPost } = require('../controllers/posts');

router.route('/getPost').get(getPosts);
router.route('/delete').post(deleteFirstPost);
router.route('/createPost' ).post(createPost);

module.exports = router;