const{ Schema, model } = require('mongoose');

const userSchema = new Schema({

    name: {
        type: String,
        required: true,
        trim: true,
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique:true,
    },
    password: {
        type: String,
        required: true,
    },
    admin: {
        type: Boolean
    },  
},{
    timestamps: true

});

//colección users
module.exports = model('User', userSchema)