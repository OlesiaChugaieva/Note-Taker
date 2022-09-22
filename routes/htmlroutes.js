const note = require('express').Router();
const { readAndAppend, readFromFile, writeToFile } = require('../helpers/fs');

// GET Route
note.get('/', (req, res) =>
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

// POST Route 
note.post('/', (req, res) => {
  const { title, text,  } = req.body;
  if (title && text) {
    const newNote = {
      title,
      text
    };

    readAndAppend(newNote, './db/db.json');
    const response = {
      status: 'success',
      body: newNote,
    };

    res.json(response);
  } else {
    res.json('Error in posting feedback');
  }
});

//Delete Route
note.delete('/:id', (req, res) => {
  const noteId = req.params.id;
  readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {

      const result = json.filter((id) => id.id !== noteId);

      writeToFile('./db/db.json', result);

      res.json(`Note ${noteId} has been deleted`);
    });
});

module.exports = note;