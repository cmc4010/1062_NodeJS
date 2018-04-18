
const fs = require('fs'); // built-in module
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js'); // custom js file

var titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

var bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};

const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('read', 'Read a note', {
    title: titleOptions
  })
  .command('list', 'List all notes')
  .command('remove', 'Remove a note', {
    title: titleOptions
  })
  .help()
  .argv;

var command = argv._[0];

if(command === 'add') {
  let note = notes.addNote(argv.title, argv.body);
  if(note === undefined){
    console.log('note title already in use');
  } else {
    console.log('note created');
    notes.logNote(note);
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`printing ${allNotes.length} note(s).`);
  allNotes.forEach((note)=>{
    notes.logNote(note);
  });
} else if (command === 'read') {
  let note = notes.getNote(argv.title);
  if(note){
    notes.logNote(note);
  } else {
    console.log('note does not exist');
  }
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log('Command not recognized');
}
