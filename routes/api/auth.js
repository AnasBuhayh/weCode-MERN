const express = require('express');
const router = express.Router();

// @route   api/auth/test
// @desc    Test profiles route
// @access  Public
router.get('/', (req,res) => res.json({msg: "auth works!"}));

module.exports = router;