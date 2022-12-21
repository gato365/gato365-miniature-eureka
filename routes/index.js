// 1.
const router = require('express').Router();

// 2. Import our modular routers 
const notesRouter = require('./notes');


// 4.
app.use('/notes', notesRouter);

 
// 5.
module.exports = router;
