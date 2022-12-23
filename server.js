// 1. Load Libraries
const express = require('express');
const path = require('path');

// 2. Load Local modules
const { clog } = require('./middleware/clog');
const api = require('./routes/index.js');
// const db = require("./config/connection");


// 3. Load Port
const PORT = process.env.PORT || 3001;

// 4. Load app
const app = express();

// 5. Import custom middleware, "cLog"
app.use(clog);

// 6. Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

// 7. Gain access to Frontend (HTML material)
app.use(express.static('public'));

//8. Get pages

// 8a. GET Route for homepage
app.get('/',  (req, res) =>{
  
  res.sendFile(path.join(__dirname, 'index.html'))
}
);

// 8b. GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// 8c. GET Wildcard route to direct users to a 404 page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/404.html'))
);

// 9. Create Listener
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
