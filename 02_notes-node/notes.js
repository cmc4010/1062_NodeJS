console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter( (note) => note.title === title );
  if(duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }

};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Getting note called', title);
};

var removeNote = (title) => {

  var notes = fetchNotes();
  var index = notes.findIndex( (note) => note.title === title );

  if(index != -1) {
    var note = notes.splice(index, 1);
    console.log(note);
    console.log('note deleted');
    console.log('--');
    console.log(`Title: ${note[0].title}`);
    console.log(`Body: ${note[0].body}`);
    saveNotes(notes);
  } else {
    console.log('note does not exist');
  }

};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
