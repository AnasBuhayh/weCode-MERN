const express = require('express');
const router = express.Router();

// @route   api/profiles/test
// @desc    Test profiles route
// @access  Public
router.get('/', (req,res) => res.json({msg: "profiles works!"}));

module.exports = router;