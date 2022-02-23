const fs = require("fs");
const path = require("path");

const createNewNote = (body, notesArray) => {
  const note = body;
  notesArray.push(note);

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(
      {
        notes: notesArray,
      },
      null,
      2
    )
  );
  return note;
};

const findById = (id, notesArray) => {
    const findId = notesArray.filter(note => note.id === id)[0];
    return findId;
};

function deleteNote(note, notesArray) {
  const index = notesArray.indexOf(note);
  notesArray.splice(index, 1);

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(
      {
        notes: notesArray,
      },
      null,
      2
    )
  );
}

module.exports = { createNewNote, findById, deleteNote };
