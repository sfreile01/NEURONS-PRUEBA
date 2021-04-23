const{ Schema, model } = require('mongoose');

const noteSchema = new Schema({

    title: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    content: {
        type: String,
        required: true,
    },
    price: Number,
    discount: Number,
    taken: Boolean,
    sale: Boolean,
    date: {
        type: Date,
        default: Date.now,
    }
},{
    timestamps: true

});

//colección notes
module.exports = model('Note', noteSchema);