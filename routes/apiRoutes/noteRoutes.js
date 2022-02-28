const { route } = require("express/lib/application");
const req = require("express/lib/request");
const uuid = require("uuid");
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
  req.body.id = uuid;
  createNewNote(req.body, notes);

  res.json(req.body);
});

// Delete note
router.delete("/notes/:id", (req, res) => {
  deleteNote(req.params.id, notes);
  res.json(notes);
});

module.exports = router;
