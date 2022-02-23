const { route } = require("express/lib/application");
const req = require("express/lib/request");
const notes = require("../../db/db.json");

const router = require("express").Router();
const { createNewNote, findById, deleteNote } = require("../../lib/notes");

// Get all notes
router.get("/notes", (req, res) => {
  let results = notes;
  console.log(results);
  res.json(results);
});

// Get note by id
router.get("/notes/:id", (req, res) => {
  const result = findById(req.params.id, notes);
  if (getId) {
    res.json(result);
  } else {
    res.send(404);
  }
});

// Create new note
router.post("/notes", (req, res) => {
  req.body.id = notes.length.toString();

  if (!req.body) {
    res.status(400).send("The note is not properly formatted.");
  } else {
    const note = createNewNote(req.body, notes);
    res.json(note);
  }
});

// Delete note
router.delete("/notes/:id", (req, res) => {
  deleteNote(req.params.id, notes);
  res.json(notes);
});

module.exports = router;
