const express = require('express');
const path = require('path');
const api = require('./routes/apiroutes');

// Creating an Express server
const app = express();

// Setting a PORT
let PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'public')));
//Setting up data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.use('/api', api);
app.use(express.static('public'));


app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public/index.html'))
  }
  );
  
  app.get('/notes', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public/notes.html'))
  }
  );
  
  app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public/index.html'))
    
  }
  );

// PORT Listener
app.listen(PORT, () => {
    console.log(`API server is ready on port ${PORT}!`);
});
