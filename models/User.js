const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema({
    lname: {
        type: String,
        required: true
    },
    fname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    degree:{
        type: String,
        required: true
    },
    courses:[
        {   
            type: Schema.Types.ObjectId,
            ref: 'course'
        }
    ]
});
module.exports = User = mongoose.model('users', UserSchema);