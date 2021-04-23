const { Router } = require('express');
const router = Router();

const { getNotes, createNote, getNote, deleteNote, updateNote } = require('../controllers/notes.controller')

router.route('/')
    .get(getNotes)
    .post(createNote)
    .delete(deleteNote)
    .put(updateNote)
    
router.route('/:id')
    .get(getNote) 
    .post(createNote)
    .delete(deleteNote)
    .put(updateNote)

module.exports = router;