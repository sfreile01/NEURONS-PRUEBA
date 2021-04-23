const notesCtrl = {};

const Notemodel = require('../models/Note')

notesCtrl.getNotes = async (req, res) => {
    const notes = await Notemodel.find(); // [ {}, {}, {}]
    res.json(notes);
    console.log(notes);
}

notesCtrl.createNote = async (req, res) => {

    const { title, content, price, date } = req.body;
    //console.log(title);
    const newNote = new Notemodel({
        title, 
        content, 
        price, 
        date,
    });
    //console.log(newNote);
    await newNote.save()
    res.json({message: 'Note saved'})
}

notesCtrl.getNote = async (req, res) => {
    //console.log(req.params.id);
    const note = await Notemodel.findById(req.params.id);
    console.log(note)
    res.json({title: 'Your note'})
}

notesCtrl.updateNote = async (req, res) => {
    //console.log(req.params.id, req.body);
    const {title, content, price} = req.body
    await Notemodel.findByOneAndUpdate(req.params.id, {
        title,
        content,
        price,
    })
    res.json({message: 'Note updated'})
} 

notesCtrl.deleteNote = async (req, res) => {
    await Notemodel.findByIdAndDelete(req.params.id)
    res.json({message: 'Note deleted'}) 
}

module.exports = notesCtrl

