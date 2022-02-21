const router = require('express').Router();
const fs = require('fs');

// this will get notes from the database
router.get('/notes', (req, res) => {
    let yourNotes = fs.readFileSync('./db/db.json', 'utf8');
    res.json(JSON.parse(yourNotes));
});

// this will post a new note and will also add top the database
router.post('/notes', (req, res) => {
    let yourNotes = fs.readFyleSync('./db/db.json', 'utf8');
    const yourNewNote = {
        ...req.body,
        // this will add an id, which will be needed when the user deletes a note
        id: notes.length.toString()
    };
    
    const parseNotes = JSON.parse(yourNotes);
    parseNotes.push(yourNewNote);

    fs.writeFile('./db/db.json', JSON.stringify(parseNotes, null, 2),
  (err, text) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Your new note has been added!")
  });
  res.json(newNote);
});

// this will delete a user's note from the database
router.delete('/notes', (req, res) => {
    let yourNotes = fs.readFileSync('./db/db.json', 'utf8');
    const parseNotes = JSON.parse(yourNotes);

    const noteUpdates = parseNotes.filter((notes) => {
        return notes.id !== req.params.id;
    });

    fs.writeFile('./db/db.json', JSON.stringify(noteUpdates), (err, text) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Your note has been deleted!')
    });
    res.json(noteUpdates);
});

module.exports = router;