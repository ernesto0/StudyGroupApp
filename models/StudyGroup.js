const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const StudyGroupSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    startTime: {
        type: String,
        required: true
    },
    course: {
        type: String, 
        required: true
    },
    description: {
        type: String, 
        required: false
    },
    leader:{
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    members:[
        {
            type: Schema.Types.ObjectId,
            ref: 'user'
        }
    ]
});

module.exports = StudyGroup = mongoose.model('studyGroup', StudyGroupSchema);