const express = require('express');
const router = express.Router();

// @route   api/posts/test
// @desc    Test posts route
// @access  Public
router.get('/', (req,res) => res.json({msg: "posts works!"}));

module.exports = router;