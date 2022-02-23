const fs = require("fs");
const path = require("path");

const createNote = (body, notesArray) => {
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

module.exports = { createNote, deleteNote };
