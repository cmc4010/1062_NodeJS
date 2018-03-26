console.log('Starting app.js');

const fs = require('fs'); // built-in module
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js'); // custom js file

const argv = yargs.argv;

var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', yargs.argv);

if(command === 'add') {
  notes.addNote(argv.title, argv.body);
} else if (command === 'list'){
  notes.getAll();
} else if (command === 'read'){
  notes.getNote(argv.title);
} else if (command === 'remove'){
  notes.removeNote(argv.title);
} else {
  console.log('Command not recognized');
}
