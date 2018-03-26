console.log('Starting notes.js');

var addNote = (title, body) => {
  console.log('Adding note', title, body);
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Getting note called', title);
};

var removeNote = (title) => {
  console.log('Removing note called', title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
