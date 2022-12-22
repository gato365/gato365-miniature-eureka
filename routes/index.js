// 1. Load Libraries
const router = require('express').Router();

// 2. Import our modular routers 
const notesRouter = require('./notes');

// 3. Use router and notes 
router.use('/notes', notesRouter);

// 4. Export module
module.exports = router;
